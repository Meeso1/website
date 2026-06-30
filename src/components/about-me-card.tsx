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
    <Card className={cn("w-full max-w-sm glass text-white", className)}>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        I'm a backend dev who currently only codes at work.
        To change that, I'll be creating random small projects and publishing them here, while also learning some fullstack.
        <br/>
        <br/>
        I plan to create:
        <ul>
          <li>- Gimmck tools that are probably not too useful</li>
          <li>- Small games / -dle's</li>
          <li>- Some ML projects / experiments</li>
          <li>- Some other stuff probably...</li>
        </ul>
        <br/>
        New stuff will show up here (ir)regularly.
        <br/>
        <br/>
        If you thing the website is hideous, that will also change - I plan to redesign it every so often to perhaps learn some frontend fundamentals.
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <LinkButton href="https://github.com/Meeso1">Meeso1 @ GitHub</LinkButton>
      </CardFooter>
    </Card>
  )
}
