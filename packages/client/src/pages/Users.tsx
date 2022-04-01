import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { UsersCard } from '../components'
import { usersCard } from '../style'

const Users = () => {
  return (
    <Suspense fallback={<h1>Loading posts...</h1>}>
      <motion.div
        variants={usersCard}
        className='xs:w-full xs:mx-2 mx-auto mt-14 grid grid-cols-1 rounded bg-grey-800 p-4 text-center shadow-lg sm:w-4/5 md:w-2/3 md:max-w-xl lg:w-3/5'>
        <UsersCard />
      </motion.div>
    </Suspense>
  )
}

export default Users