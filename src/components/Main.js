import Styled from 'styled-components';

const Main = () => {
  return (
    <Container><ShareBox>Share
    <div>
      <img src='/images/user.svg' alt=""/>
      <button>Start a post</button>
    </div>
    <div>
    
      <button>
        <img src='/images/photo-icon.svg' alt=""></img>
        <span>Photo</span>
      </button>
      <button>
        <img src='/images/video.svg' alt=""></img>
        <span>Video</span>
      </button>
      <button>
        <img src='/images/event.svg' alt=""></img>
        <span>Event</span>
      </button>
      <button>
        <img src='/images/article.svg' alt=""></img>
        <span>Write article</span>
      </button>
    </div>
    </ShareBox>
    <div>
      <Article>
        <SharedActor><a>
          <img src="/images/user.svg" alt=''/>
          <div>
          <span>Title</span>
          <span>Info</span>
          <span>Date</span>
          </div>
          </a>
          <button><img src='/images/ellipses.svg'/></button>
          </SharedActor>
          <Description>Text</Description>
          <SharedImg>
            <a>
              <img src="/images/radom.jpg" alt=''/>
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"></img>
                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"></img>
                <span>75</span>
              </button>
            </li>
            <li><a>3 comments</a></li>

          </SocialCounts>
          <SocialActions>
          <button>
            <img src='/images/like.svg' alt=""/>
            <svg role="none" aria-hidden="true" class="artdeco-button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-supported-dps="24x24" data-test-icon="thumbs-up-outline-medium">
   

    <use href="#thumbs-up-outline-medium" width="24" height="24"></use>
</svg>
            <span>Like</span>

          </button>
          <button>
            <img src='/images/comment.svg' alt=""/>
            <span>Comments</span>
            
          </button>
          <button>
            <img src='/images/repost.svg' alt=""/>
            <span>Repost</span>
            
          </button>
          <button>
            <img src='/images/send.svg' alt=""/>
            <span>Send</span>
            
          </button>
          </SocialActions>
      </Article>
    </div>
    </Container>
  )
}
const Container =Styled.div`
grid-area:"main";
`
const CommonCard = Styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`;
const ShareBox = Styled(CommonCard)`
display : flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;
div{
  button{
    outline:none;
    color:rgba(0, 0, 0,0.6);
    font-size:14px;
    line-height:1.5;
    min-height:48px;
    background:transparent;
    border:none;
    display:flex;
    align-items:center;
    font-weight:600;

  }
  &:first-child{
    display:flex;
    align-items:center;
    padding: 8px 16px 0px 16px;
    img{
      width:48px;
      border-radius:50%;
      margin-right:8px;

    }
    button{
      margin: 4px 0 ;
       flex-grow:1;
       padding-left: 16px;
       border: 1px solid rgba(0, 0,0 ,0.15);
       border-radius: 35px;
       background-color:white;
       text-align:left;

    }
  }
&:nth-child(2){
display:flex;
flex-wrap:wrap;
justify-content:space-around;
padding-bottom:4px;
button{
  img{
    margin: 0 4px 0 -2px;

  }
  span{
    color:#70b5f9;
  }
}
}
}
`;
const Article = Styled(CommonCard)`
padding:0;
margin : 0 0 8px;
overflow:visible;

`
const SharedActor = Styled.div`
padding-right: 40px;
flex-wrap:nowrap;
padding: 12px 16px 0;
margin-bottom: 8px;
align-items:center;
display:flex;
a{
  margin-right:12px;
  flex-grow:1;
  overflow:hidden;
  display :flex;
  text-decoration:none;
  img{
    width:48px;
    height:48px;
  }
  &>div{
    display:flex;
    flex-direction:column;
    flex-grow:1;
    flex-basis:0;
    margin-left:8px;
    overflow:hidden;
    span{
      text-align:left;
      &:first-child{
        font-size: 14px;
        font-weight: 700;
        color:rgba(0,0,0,1);
      }
      &:nth-child(n+1){
        font-size:12px;
        color:rgba(0,0,0,0.6);

      }
    }
  }
}
button{
  position:absolute;
  right:12px;
  top:0;
  background:transparent;
  border:none;
  outline:none;

}

`;
const Description = Styled.div`
padding: 0 16px;
overflow:hidden;
color:rgba(0,0,0,0.9);
font-size:14px;
text-align:left;

`;
const SharedImg = Styled.div`
margin-top: 8px;
width:100%;
display:block;
position:relative;
background-color:#f9fafb;
img{
  object-fit:contain;
  width:100%;
  height:100%;
}
`;
const SocialCounts = Styled.ul`
line-height: 1.3;
display:flex;
align-items:flex-start;
overflow:auto;
margin:0 16px;
padding: 8px 0;
border-bottom: 1px solid #e9e5df;
list-style:none;
li {
   margin-right:5px;
   font-size:12px;
   button{
    display:flex;
   }
}
`;
const SocialActions = Styled.div`
align-items:center;
display:flex;
justify-content:flex-start;
margin: 0 ;
 min-height:40px;
 padding:4px 8px;
 button{
  display: inline-flex;
  align-items:center;
  padding: 8px;
  color: #0a66c2;

  @media(min-width:768px){
    span{
      margin-left: 8px;
    }
  }
 }

`;
export default Main