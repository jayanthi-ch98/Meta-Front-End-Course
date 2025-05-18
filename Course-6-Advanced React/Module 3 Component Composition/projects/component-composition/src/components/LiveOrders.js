import React from 'react';
const Row=({children,spacing})=>{

    const childStyle={
        marginLeft:`${spacing}px`
    }
    return(
        <div className="Row">
            {React.Children.map(children,(child,index)=>{
               return React.cloneElement(child,{
                    style : {
                        ...child.props.style,
                        ...(index>0 ?childStyle:{})
                    }
                })

            })}
        </div>
    )
}   

const LiveOrders =()=>{
    return(
        <Row spacing={32}>
            <p>Pizza Margharita</p>
            <p>2</p>
            <p>$30</p>
            <p>18.30</p>

        </Row>
    )
}
export default LiveOrders;