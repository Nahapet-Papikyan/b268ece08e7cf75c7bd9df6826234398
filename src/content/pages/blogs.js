import React from 'react'
import { Save } from "../components/save";

export const Blogs = ({isHaveChanges}) => {
  return (
    <>
      <p>Blogs</p>
      <Save isHaveChanges = {isHaveChanges} callBack = {() => {}} />
    </>
  )
}