def html():
  
    title_articles = input()
    print(f"<h1>\n    {title_articles}\n</h1>")
    content_of_articles = input()
    print(f"<article>\n    {content_of_articles}\n</article>")

    
    while True:
        comments = input()
        if comments == "end of comments":
            break
        print(f'<div>\n    {comments}\n</div>')


html()
