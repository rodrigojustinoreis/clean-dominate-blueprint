import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/pages/Blog";

// Shared blog post card — used by the /resources index and every /resources/topic/<slug> hub so the
// listing markup stays in one place. The whole card is a single link to the post (no nested
// anchors); topic navigation lives in the BlogTopicNav pill bar above the list.
export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
      <Link to={`/resources/${post.slug}`} className="md:flex">
        <div className="md:w-64 md:flex-shrink-0 h-48 md:h-auto overflow-hidden">
          <img
            src={post.coverImage || "/images/team/team-mopping-bright-room.jpg"}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <CardContent className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full font-medium">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
          </div>
          <h2 className="font-heading text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
          <Button variant="link" className="p-0 h-auto text-accent w-fit">
            Read More <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </CardContent>
      </Link>
    </Card>
  );
}
