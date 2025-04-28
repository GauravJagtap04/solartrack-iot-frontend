import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function ReadingCard({
  title,
  data,
  def,
  unit,
  prefix,
  icon,
}) {
  return (
    <Card className="py-4 px-4 gap-2.5 rounded-md min-w-90 sm:min-w-auto">
      <CardHeader className="px-0">
        <CardTitle className="px-0">
          <div className="flex gap-1 font-thin text-[.85rem] items-center justify-start opacity-65">
            {icon ? icon : ""}
            {title}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 font-semibold text-2xl opacity-90">
        <p>
          {prefix ? prefix : ""}
          {data ? data : def}
          {unit ? unit : ""}
        </p>
      </CardContent>
    </Card>
  );
}
