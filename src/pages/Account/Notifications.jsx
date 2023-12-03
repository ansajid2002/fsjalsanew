import React from 'react'
import Profilesidebar from '../../components/profile/Profilesidebar'
import ii from "../../assets/girls4.jpg"

const Notifications = () => {



  const notificationArr=[
    {
      img:ii,
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-05-29"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-05-1"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-05-31"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection Our amazing collection of Lehengas & more! Shop HereExplore Our amazing collection Our amazing collection of Lehengas & more! Shop HereExplore Our amazing collection Our amazing collection of Lehengas & more! Shop HereExplore Our amazing collection Our amazing collection of Lehengas & more! Shop HereExplore Our amazing collection Our amazing collection of Lehengas & more! Shop HereExplore Our amazing collection Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-12-03"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-01-20"
    },
    {
      img:"./fj_images/men/m2.jpg",
      text:"Explore Our amazing collection of Lehengas & more! Shop Here >",
      date:"2023-05-31"
    }
  ]
 

 const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  const currentDate = new Date();
  

  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    return 'Today';
  }

  currentDate.setDate(currentDate.getDate() - 1);

  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    return 'Yesterday';
  }

  return date.toLocaleDateString('en-US', options);
};


const formatDateNum = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const formattedDay = getFormattedDay(day);

  return `${formattedDay} ${month} ${year}`;
};

const getFormattedDay = (day) => {
  let suffix = 'th';

  if (day === 1 || day === 21 || day === 31) {
    suffix = 'st';
  } else if (day === 2 || day === 22) {
    suffix = 'nd';
  } else if (day === 3 || day === 23) {
    suffix = 'rd';
  }

  return `${day}${suffix}`;
};
  
  const sortedNotifications = notificationArr.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    const today = new Date();
  
    const diffA = Math.abs(dateA - today);
    const diffB = Math.abs(dateB - today);
  
    return diffA - diffB;
  });
  
  const dateArray = Object.keys(sortedNotifications.reduce((acc, notification) => {
    const { date } = notification;
    if (acc[date]) {
      acc[date].push(notification);
    } else {
      acc[date] = [notification];
    }
    return acc;
  }, {})).map((date) => ({
    date,
    notifications: sortedNotifications.filter((notification) => notification.date === date),
  }));

  return (
    <div className='flex py-10 mx-2 lg:mx-5 xl:mx-8'>
      <div className='hidden md:block'>
    <Profilesidebar/>

      </div>
      <main className='border rounded-sm shadow-md py-4 px-2 md:px-6 lg:px-10 mx-auto'>
        <h1 className='text-xl font-medium'>All Notifications</h1>
        <div className='w-full md:w-[400px] lg:w-[500px] xl:w-[700px]'>
   
      <div 
      >
        
        <div>
  {dateArray.map((n) => {
    const { img, text, date, notifications } = n;
    return (
      <section className='my-5'>
        <h3 className='text-base lg:text-xl font-normal mb-1'>{formatDate(date)}</h3>
        {notifications.map((noti) => {
          return (
            <div className='flex my-2 border p-2'>
              <div className='aspect-[3/4] h-[90px] md:h-[100px] lg:h-[120px] xl:h-[140px] mr-4'>
                <img src={ii} alt="img" className='h-full w-full object-cover rounded-sm' />
              </div>
              <div style={{ flex: '1' }}>
                <h3 className='mb-1 line-clamp-2 text-[14px] lg:text-base'>{noti.text}</h3>
                <p className='text-[14px] font-medium lg:text-base' style={{ marginTop: '0' }}>{formatDateNum(date)}</p>
                <p className='text-right flex justify-end '>
                  <span className='text-blue-600 font-medium mr-2 text-[14px] lg:text-xl mt-2'>More Details</span>
                </p>
              </div>
            </div>
          );
        })}
      </section>
    );
  })}
</div>

      </div>
     
    </div>
    </main>
</div>










  )
}

export default Notifications