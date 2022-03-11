import React, { useEffect, useState } from 'react'
import { Form} from 'react-bootstrap'

const Rating = ({value, handleChange, name}) => {

    const [current, setCurrent] =useState(value)
     useEffect(()=>{
        handleChange(name, current)
     },[current])
    const changeSelected = (e) => {
        e.persist();
        setCurrent(parseInt(e.target.value))
      }


  return (
    <div className="form-group">
    <label>{name}: </label>
    


    <div key={`inline-radio`} className="mb-3">
        <Form>

    <Form.Check
      inline
      label="1"
      value={1}
      defaultChecked={current==1}
      name="group1"
      type="radio"
      onChange={changeSelected}
      id={`inline-radio-1`}
    />
    <Form.Check
      inline
      label="2"
      value={2}
      defaultChecked={current==2}
      name="group1"
      type="radio"
      onChange={changeSelected}
      id={`inline-radio-2`}
    />
    <Form.Check
      inline
      label="3"
      value={3}
      defaultChecked={current==3}
      name="group1"
      type="radio"
      onChange={changeSelected}
      id={`inline-radio-3`}
    />
    <Form.Check
      inline
      label="4"
      defaultChecked={current==4}
      value={4}
      name="group1"
      type="radio"
      onChange={changeSelected}
      id={`inline-radio-4`}
    />
    <Form.Check
      inline
      label="5"
      value={5}
      defaultChecked={current==5}
      name="group1"
      type="radio"
      onChange={changeSelected}
      id={`inline-radio-5`}
      />
      </Form>
    </div>
      </div>
  )
}

export default Rating
