import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you're using React Router

import img1 from '../../images/home/Banner/carousel-1.jpg'
import img2 from '../../images/home/Banner/carousel-2.jpg'

const Poster = () => {
    const location = useLocation();
    const [isHomeRoute, setIsHomeRoute] = useState(false);

    useEffect(() => {
        setIsHomeRoute(location.pathname === '/');
    }, [location.pathname]);

    return (
        <div id="header-carousel" className="carousel slide" data-ride="carousel" style={{ display: isHomeRoute ? 'block' : 'none' }}>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: '410px' }}>
                        <img className="img-fluid" src={img1} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '700px' }}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: '410px' }}>
                        <img className="img-fluid" src={img2} alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: '700px' }}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                <a href="" className="btn btn-light py-2 px-3">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                    <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </a>
                <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                    <div className="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </a>
        </div>
    );
};

export default Poster;
