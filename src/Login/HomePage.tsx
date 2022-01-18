import React, { useState, useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios'
import "./CSS/user-item.css";
import Avatar from "./CSS/Avatar";


export interface Props {
    logout: any;
}


const HomePage = (props: Props) => {

    const [items, setitems] = useState<any[]>([])
    const [loading, setloading] = useState(false)

    function fetchData() {

        axios.get("https://randomuser.me/api/?results=10",)
            .then((response) => {
                console.log(response.data.results)
                setTimeout(() => {
                    setitems((previousitems) => {
                        return [...(previousitems || []), ...response.data.results]
                    })
                }, 1000)

                setloading(false)
            }
            ).catch((err) => {
                console.error(err)
                setloading(false)
            })
    }


    useEffect(() => {
        fetchData()
    }, [])


    return (<div> 
        <InfiniteScroll
            dataLength={items.length}
            next={fetchData}
            hasMore={items.length < 500}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            {items.map(item => (<div className="user-item">
                <div>{item.name.first} {item.name.last}</div>
                <div><Avatar image={item.picture.thumbnail}></Avatar></div>
            </div>
            ))}
        </InfiniteScroll>
    </div>
    )
}

export default HomePage