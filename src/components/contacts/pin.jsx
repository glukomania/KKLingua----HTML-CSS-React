import { Icon } from 'semantic-ui-react'


const iconStyle = {  
  borderRadius: '10px',
  transform: 'matrix(-1, 0, 0, 1, 10, 0)',

} 
export const Pin = ({text}) => {  
 return(
    <div>
      <Icon name="point" 
       color='orange' 
       size='big' 
       style={iconStyle}
      />      
      {text} 
     </div> 
  )
}