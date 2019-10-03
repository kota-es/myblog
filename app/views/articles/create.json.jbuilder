json.content   @article.content
json.date   @article.created_at.strftime("%Y/%m/%d %H:%M:%S")
json.user_name  @article.user.nickname