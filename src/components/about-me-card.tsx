import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import LinkButton from "./link-button"

export default function AboutMeCard({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        TODO: about me content
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <LinkButton href="https://github.com/Meeso1">GitHub</LinkButton>
      </CardFooter>
    </Card>
  )
}
