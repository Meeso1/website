import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import LinkButton from "./link-button"

export default function ProjectCard(
    { title, description, link, className }: { title: string, description: string, link: string, className?: string }
) {
  return (
    <Card className={cn("w-full max-w-sm", className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <LinkButton href={link}>View Project</LinkButton>
      </CardFooter>
    </Card>
  )
}
