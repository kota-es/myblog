class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: :index

  def index
    @articles = Article.order("created_at DESC").page(params[:page]).per(5)
  end
  
  def new
    @article = Article.new
  end

  def create
    current_user.articles.create(article_params)
    redirect_to root_path
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy if @article.user_id == current_user.id
    redirect_to root_path
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    @article.update(article_params)
    redirect_to root_path
  end

  private

  def article_params
    params.require(:article).permit(:content)
  end

end
