class PostsController < ApplicationController
  def index
    @posts = Post.all
    @post = Post.new
  end

  def new
    @post = Post.new
  end

  def create
    @posts = Post.all
    @post = Post.new(post_params)
    respond_to do |format|
      if @post.save
        format.js { render nothing: true, notice: 'Post was successfully created.' }
      end
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :content)
  end

end


