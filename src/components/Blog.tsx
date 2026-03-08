import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Calendar, Clock } from "lucide-react";
import cachedArticles from "@/data/blog-cache.json";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string | null;
  categories: string[];
}

async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@devonclemente',
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
    if (data.status === 'ok') {
      return data.items.slice(0, 6).map((item: any) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        thumbnail: item.thumbnail || item.enclosure?.link,
        categories: item.categories || []
      }));
    }
    throw new Error('Invalid response');
  } catch {
    return cachedArticles as Article[];
  }
}

const Blog = async () => {
  const articles = await fetchArticles();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getReadingTime = (description: string) => {
    const wordsPerMinute = 200;
    const wordCount = description.split(/\s+/).length;
    return `${Math.ceil(wordCount / wordsPerMinute)} min read`;
  };

  if (articles.length === 0) {
    return (
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">Latest Articles</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Insights & Thoughts<span className="text-primary block">From My Blog</span>
            </h2>
            <p className="text-muted-foreground">Unable to load articles at this time</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">Latest Articles</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Insights & Thoughts<span className="text-primary block">From My Blog</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my latest writings on AI automation, operations management, and technology innovation on Medium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <Card key={index} className="group bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0 overflow-hidden outline-primary flex flex-col">
                {article.thumbnail && (
                  <div className="overflow-hidden h-48 bg-muted">
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{formatDate(article.pubDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />{getReadingTime(article.description)}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground leading-tight line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {article.description}
                  </p>
                  {article.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.categories.slice(0, 3).map((category, catIndex) => (
                        <Badge key={catIndex} variant="outline" className="text-xs bg-muted/50">{category}</Badge>
                      ))}
                    </div>
                  )}
                  <Button variant="default" size="sm" className="w-full mt-auto" asChild>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read on Medium
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="default" className="shadow-soft" asChild>
              <a href="https://medium.com/@devonclemente" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5 mr-2" />
                View All Articles on Medium
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
