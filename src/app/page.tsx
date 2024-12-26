import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Heart, PartyPopper, BombIcon as Balloon, Gift } from 'lucide-react'

export default function Home() {
  const feedItems = [
    { type: 'birthday', user: 'Alice', age: 28 },
    { type: 'wishlist', user: 'Bob', item: 'New Headphones' },
    { type: 'comment', user: 'Charlie', target: 'David', event: 'birthday' },
  ]

  const renderFeedItem = (item: any) => {
    switch (item.type) {
      case 'birthday':
        return (
          <Card key={item.user}>
            <CardHeader>
              <CardTitle>🎉 Happy Birthday, {item.user}!</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.user} is celebrating their {item.age}th birthday today!</p>
              <div className="flex space-x-2 mt-4">
                <Button size="sm"><Heart className="mr-2 h-4 w-4" /> Love</Button>
                <Button size="sm"><PartyPopper className="mr-2 h-4 w-4" /> Celebrate</Button>
                <Button size="sm"><Balloon className="mr-2 h-4 w-4" /> Cheer</Button>
                <Button size="sm"><Gift className="mr-2 h-4 w-4" /> Gift</Button>
              </div>
            </CardContent>
          </Card>
        )
      case 'wishlist':
        return (
          <Card key={item.user + item.item}>
            <CardHeader>
              <CardTitle>🎁 New Wishlist Item</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.user} added {item.item} to their wishlist!</p>
              <Button size="sm" className="mt-4">View Wishlist</Button>
            </CardContent>
          </Card>
        )
      case 'comment':
        return (
          <Card key={item.user + item.target}>
            <CardHeader>
              <CardTitle>💬 New Comment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.user} commented on {item.target}'s {item.event}!</p>
              <Button size="sm" className="mt-4">View Comment</Button>
            </CardContent>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Cherish Feed</h1>
      {feedItems.map(renderFeedItem)}
    </div>
  )
}


