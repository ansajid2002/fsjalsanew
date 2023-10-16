import React, { useEffect, useState } from 'react'
import { BsInstagram, BsTwitter, BsSearch, BsHeart, BsCart, BsHammer } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrNotification } from "react-icons/gr"
import { VscAccount } from "react-icons/vsc"
import indianflag from "../assets/india-flag.png"
import fslogoblack from "../assets/fslogo-black.png"
import { Input, Modal } from 'antd';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Button, Drawer } from 'antd';

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { categoriesList } = useSelector((store) => store.categories)

    // console.log(categoriesList);


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        pauseOnHover: true,
        speed: 500,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 4,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                }
            },

            // Add more breakpoints and settings as needed
        ]
    };

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        if (windowWidth > 768) {
            setIsModalOpen(false);
        }
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [windowWidth]);

    return (
        <div className=' '>
            <div className='bg-black hidden md:flex justify-between  py-1 px-10  '>
                <div className='flex items-center'>
                    <div className='mx-2 w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center'>
                        <BsInstagram color="black" size={15} />

                    </div>
                    <div className='mx-2 w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center'>
                        <FaFacebookF color="black" size={15} />

                    </div>
                    <div className=' mx-2 w-[23px] h-[23px] bg-white rounded-full flex items-center justify-center'>
                        <BsTwitter color="black" size={15} />

                    </div>
                </div>
                <div className='flex space-x-8'>
                    <h1 className='text-white text-sm -mt-0.2 font-medium'>Offer : Buy 2 get 1 Free</h1>
                    <img src={indianflag} alt="Selected Country" className='w-[30px]' />
                </div>
            </div>
            <div className='flex items-center justify-between mt-2  md:my-1 px-1 md:px-10 '>
                <Link to="/" className='order-2 md:order-1 -ml-4 md:ml-0'><img src={fslogoblack} alt="main-logo" className='h-[38px] md:h-[50px]' /></Link>
                <div className='flex items-center md:space-x-10  order-1 md:order-2'>
                    <div className='relative hidden md:block '>
                        <Input placeholder="Search here..." className=' w-[200px]' />
                        <BsSearch className='absolute top-2 right-2' />
                    </div>
                    <div className='flex items-center space-x-3 md:space-x-4'>
                        <BsHeart size={18} className=' hidden md:block' />
                        <VscAccount size={18} />
                        <GrNotification size={18} className=' hidden md:block' />
                        <BsCart size={18} />
                        <BsSearch className='block md:hidden' onClick={showModal} />
                        <Modal title="Search products, categories, ..." open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okButtonProps={{ className: ' bg-blue-500' }} cancelButtonProps={{className:'bg-red-500 text-white'}}>
                            <div className='relative my-4  '>
                                <Input placeholder="Search here..." className=' ' />
                                <BsSearch size={16} className='absolute top-2 right-2' />
                            </div>
                        </Modal>

                    </div>
                </div>
                <Button onClick={showDrawer} className='block md:hidden  order-3'><GiHamburgerMenu /></Button>
                <Drawer className='' title="Menu" placement="right" onClose={onClose} open={open}>
                    <div className='text-white'>
                        <div className=' ' >
                            {
                                categoriesList.map((single, index) => {
                                    return (
                                        <div key={index} className=' mb-3.5 '>
                                            <button className=' text-[15px] font-normal'><Link to={`/${single.category_name}`}>{single.category_name}</Link></button>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        <div className='border-t pt-4'>
                            <button className='font-medium text-lg bg-gray-100 px-2 py-1 pt-0.5 rounded-md text-black'>Sign In</button>
                        </div>
                    </div>
                </Drawer>
            </div>
            <div className='border-b  border-gray-200 py-1'>
                {
                    windowWidth > 768 ?
                        <div className='flex items-center justify-between mx-[12%] mb-2' >
                            {
                                categoriesList.slice(0, 10).map((single, index) => {
                                    return (
                                        <div>

                                            <div key={index} className='  '>
                                                <button className=' text-[12px] lg:text-[14px] xl:text-[17px] font-normal'><Link to={`/${single.category_name}`}>{single.category_name}</Link></button>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div> :
                        <div className='mx-2'>

                            <Slider {...settings}>
                                {
                                    categoriesList.slice(0, 10).map((single, index) => {
                                        const { category_name, category_image_url } = single

                                        return (
                                            <div>
                                                <div className='flex items-center justify-center mx-1.5 sm:mx-4 my-2 sm:my-4'>
                                                    <div className='' >
                                                        {/* <div className='sm:h-[375px] sm:w-[250px] lg:h-[360px] lg:w-[240px] xl:h-[450px] xl:w-[300px]  2xl:h-[525px] 2xl:w-[350px]'> */}
                                                        <div className=' aspect-[4/4] border rounded-full p-3  '>
                                                            <img src={category_image_url} alt="trendimg" className=' object-cover w-full h-full rounded-lg' />
                                                        </div>
                                                        <h1 className="text-center text-[11px] sm:text-[13px] md:text-xl font-medium mt-0.5 md:mt-1">{category_name}</h1>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </Slider>
                        </div>

                }
            </div>
        </div>
    )
}

export default Header