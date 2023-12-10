import { Checkbox, Slider } from 'antd'
import React from 'react'






const Sidebar = () => {
    const dummysidebarData = [
        {
          name:"More Categories",
          values:['Pret',
          'Blouses',
          'Ghagra',
          'Anarkali',
          'Kaftan',
          'Sarees']
        },
        {
          name:"Shop By Fabric",
          values:['Cotton',
          'Polyester',
          'Crepe',
          'Chiffon',
          'Lace',
          'Silk']
        },
        {
          name:"Shop By Occassion",
          values:["Wedding","Casual","Reception","Cocktail","Mehendi"]
        },
        {
          name:"Shop By Look",
          values:["Designer","Traditional","Contempary","Fashion","Party Wear"]
        },
        {
            name:"Shop By Discount",
            values:["Upto 20% off","Upto 30% off","Upto 50% off"]
        }
      ]
      const colors = [ '#FF5733', // Reddish
      '#3498DB', // Blue
      '#27AE60', // Green
      '#9B59B6', // Purple
      '#F1C40F', // Yellow
    ]
    const ratings = [
       
            "1.0 to 5.0" ,
            "2.0 to 5.0" ,
             "3.0 to 5.0" ,
             "4.0 to 5.0" ,
          ];
    
  return (
    <div>
        <div>
      {dummysidebarData.map((category, index) => {

      const {values} = category
        return (
            <div key={index} className='my-6'>
          <h3 className='text-xl my-2'>{category.name}</h3>
          <ul>
            {values?.map((value, idx) => (
              <li key={idx}>
                <label className='ml-2'>
                  <Checkbox/>
                  {` ${value}`}
                </label>
              </li>
            ))}
          </ul>
        </div>
        )}
        
      )}
    </div>
 <div className='my-6'>
   <h1 className="text-xl my-2" >Price</h1>
   <Slider
     range={{
       draggableTrack: true,
     }}
     className="w-[80%]"
     defaultValue={[20, 50]}
   />
 </div>
 <div className='my-6'>
    <h3 className='text-xl my-2'>Colors</h3>
    <div className="flex my-2 space-x-2">
    {
        colors.map((value,index) => {
            return (
                <h1
                key={index}
                style={{ backgroundColor: value, width: '20px', height: '20px', borderRadius: '50%' }}
              ></h1>
            )
        })
    }
    </div>
    </div>
    <div className='my-6'>
        <h3 className='text-xl my-2'>Ratings</h3>
        <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
  {ratings.map((value, idx) => (
    <li key={idx} className=''>
      <label className='ml-2'>
        <Checkbox />
        {` ${value}`}
      </label>
    </li>
  ))}
</ul>
        </div>

    </div>
    </div>
  )
}

export default Sidebar
