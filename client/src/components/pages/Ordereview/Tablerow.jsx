import React from 'react';

const Tablerow = ({d,handledelete,Updateconfirm}) => {
    const {Customaremail,Customarimg,serverprice,Orderdate,confirm,_id}=d
 

    return (
        <tr>
        <th><label onClick={()=>handledelete(_id)} className="btn btn-circle">
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label></th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-[50px] h-[50px] rounded-md">
                <img className='w-full h-full' src={Customarimg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{Customaremail}</td>
        <td>${serverprice}</td>
        <td>{Orderdate}</td>
        <th>
            {confirm === true ?  <button className='border-2 border-[#29B170] py-[7px] px-2 text-[#29B170] rounded-md '>Approved</button>: <button onClick={()=>Updateconfirm(_id)} className='bg-[#FF3811] py-2 px-3 text-white rounded-md'>Pending</button>}
         
        </th>
      </tr>
    );
};

export default Tablerow;