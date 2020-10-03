import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Post from '../../components/Post';
import Redirector from '../../components/Redirector';
import RedirectorInfo from '../../components/Redirector/redirectorInfo';
import RedirectorText from '../../components/Redirector/redirectorText';
import RedirectorBanner from '../../components/Redirector/redirectorBanner';

//Services
import {products} from '../../services/mockData';

function Loja(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <p className="page__place-holder">Store</p>
                    <Post>
                        {products.map((element,index) => {
                            return(
                                <Redirector 
                                    key={index}
                                    redirectorType='product'
                                    redirectorID={element.ID}
                                >
                                    <RedirectorInfo>
                                        <RedirectorText
                                            infoType="title"
                                            color="dark"
                                        >
                                            {element.title}
                                        </RedirectorText>
                                        <RedirectorText
                                            infoType="price"
                                            color="grey"
                                        >
                                            R$ {element.price.toFixed(2)}
                                        </RedirectorText>
                                    </RedirectorInfo>
                                    <RedirectorBanner 
                                        url={element.bannerURL}
                                        alt={element.title}
                                    />
                                </Redirector>
                            );
                        })}
                    </Post>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Loja;