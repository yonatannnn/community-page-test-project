import { useState, useRef } from "react"
import { ImagePlus, X } from "lucide-react"
import { Button } from "../components/ui/button"
import { Textarea } from "../components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card } from "../components/ui/card"
import { useDispatch , useSelector } from "react-redux"
import { addPost } from "../redux/slices/postSlice"
import PostModel from "../models/postModel"
import User from "../models/user"

export function CreatePost() {
  
  const [images, setImages] = useState<string[]>([])
  const [text, setText] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const user : User = useSelector((state : any) => state.user).user

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const remainingSlots = 2 - images.length
    if (remainingSlots <= 0) return

    const newImages = Array.from(files)
      .slice(0, remainingSlots)
      .map((file) => URL.createObjectURL(file))
    setImages((prev) => [...prev, ...newImages])
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {

    const post: PostModel = {
      id: Date.now(),
      user: user,
      textContent: text,
      pictureContent: images.length > 0 ? images[0] : undefined,
      createdAt: new Date().toISOString(),
      comments: [],
      likes: [],
      shares: []
    }
    e.preventDefault()
    dispatch(addPost(post))
    setText("")
    setImages([])
  }

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src={user.profilePicture} />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's on your mind?"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[100px] resize-none"
            />
          </div>
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {images.map((image, index) => (
              <div key={index} className="relative group aspect-w-16 aspect-h-9">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Upload preview ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 p-1 rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={images.length >= 2}
            >
              <ImagePlus className="h-4 w-4 mr-2" />
              Add Image
            </Button>
            <span className="text-xs text-muted-foreground">{images.length}/2 images</span>
          </div>
          <Button type="submit" disabled={!text && images.length === 0}>
            Post
          </Button>
        </div>
      </form>
    </Card>
  )
}

