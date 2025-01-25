import { Home, Users, Bookmark, MessageCircle, TrendingUp } from "lucide-react"
import { Button } from "../../components/ui/button"

export function LeftSidebar() {
  const navItems = [
    { icon: Home, label: "Home" },
    { icon: Users, label: "Friends" },
    { icon: Bookmark, label: "Saved" },
    { icon: MessageCircle, label: "Messages" },
  ]

  const trendingTopics = ["#Technology", "#Travel", "#Food", "#Art", "#Music"]

  return (
    <aside className="hidden lg:block space-y-6">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Button key={item.label} variant="ghost" className="w-full justify-start">
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Trending Topics</h2>
        <div className="space-y-2">
          {trendingTopics.map((topic) => (
            <Button key={topic} variant="ghost" className="w-full justify-start">
              <TrendingUp className="mr-2 h-4 w-4" />
              {topic}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}

