import Styled from 'styled-components';

const LeftSide = (props) => {
          return (
                    <Container>
                              <ArtCard>
                                        <UserInfo>
                                                  <CardBackground />
                                                  <a>
                                                            <Photo />
                                                            <Link>Welcome, there!</Link>
                                                  </a>
                                                  <a>
                                                            <AddPhotoText>Add a phot

                                                            </AddPhotoText>
                                                  </a>
                                        </UserInfo>
                              </ArtCard>
                    </Container>
          )
}
const Container = Styled.div`
grid-area: leftside;
`;

const ArtCard = Styled.div`
text-align:center;
overflow:hidden;
padding: 10px;
margin-bottom:8px;
background-color:#fff;
border-radius:5px;
transition: box-shadow 83ms;
position: relative;
border:none;
box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);
`
const UserInfo = Styled.div`
border-bottom: 1px solid rgba(0,0,0,0.15)
padding: 12px 12px 16px;
word-wrap:break-word;
word-break:break-word;
`;
const CardBackground = Styled.div`
background: url("/images/card-bg.svg");
background-position:center;
background-size:462px;
height: 54px;
margin: -12px -12px 0;

`;
const Photo = Styled.div`
box-shadow:none;
background-image:url("/images/photo.svg");
width:72px;
height:72px;
box-sizing : border-box;
background-clip:content-box;
background-color:white;
background-position:center;
background-size:60%;
background-repeat : no-repeat;
border: 2px solid white;
margin : -38px auto 12px;
`;
const Link =Styled.div``;
const AddPhotoText = Styled.div``;

export default LeftSide