import SuggestedUser from "../SuggestedUser"
import { useSelector } from "react-redux"
import User from "../../models/user"

export function RightSidebar() {
    const suggestedUsers = useSelector((state: any) => state.suggestedUsers);

  return (
    <aside className="hidden lg:block space-y-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight">Suggested Follows</h2>
        <div className="space-y-4">
          {suggestedUsers.map((user : User) => (
            SuggestedUser(user)
          ))}
        </div>
      </div>
    </aside>
  )
}

