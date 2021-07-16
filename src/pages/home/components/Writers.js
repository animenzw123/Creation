import React, { useEffect, useState } from 'react';
import { WrittersWrapper, WritterTitle, WritterItem, WritterInfo } from '../style';
import axios from 'axios';


function Writers() {
    const [writters, setWritters] = useState({
        data: [{
                "id": 0,
                "name": "",
                "follower": "",
                "imgUrl": "" 
        }]
    });

    useEffect(()=>{
        const fetchData = async() =>{
            axios.get('/api/writters.json').then((res)=>{
                const result = res.data;
                setWritters(result);
                return
            })
        }
        fetchData()
        
    },[])

    return(
        <WrittersWrapper>
            <WritterTitle>
                <div className='leftTitle'>Top Authors:</div>
                <div className='rightTitle'>See More</div>
            </WritterTitle>
            {writters.data.map(item => (
                <WritterItem key={item.id}>
                <img alt='' src={item.imgUrl} />
                <WritterInfo>
                    <p className='writter'>{item.name}</p>
                    <p className='followers'>{item.follower} followers</p>
                </WritterInfo>
                <span className="iconfont addFollow">&#xe674;</span>
            </WritterItem>
            ))}        
        </WrittersWrapper>
    )
}

export default Writers;