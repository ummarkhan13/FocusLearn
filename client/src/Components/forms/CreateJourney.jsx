import React from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const CreateJourney = ({open,setOpen}) => {
   
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="flex gap-5 justify-center items-center relative transform overflow-hidden rounded-lg bg-transparent text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-4xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
           
      
      <div class="w-full p-6 bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Custom Journey
          </h2>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                  <label for="jn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Journey Name</label>
                  <input type="text" name="jn"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Journey Name" required=""/>
              </div>
              <div>
                  <label for="Subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                  <input type="text" name="Subject"  placeholder="Subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <div>
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                  <input type="text-area" name="description" placeholder="start writing..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <div>
    <label for="Visibility" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visibility</label>
    <div class="flex items-center mb-4">
        <input type="radio" id="private" name="visibility" value="private" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
        <label for="private" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
    </div>
    <div class="flex items-center">
        <input type="radio" id="public" name="visibility" value="public" required class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="public" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Public</label>
    </div>
</div>

             
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Done</button>
          </form>
      </div>

      <h1 className="text-2xl font-bold text-center text-white">OR</h1>
      

      <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create with Playlist
          </h2>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                  <label for="jn" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Journey Name</label>
                  <input type="text" name="jn"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Journey Name" required=""/>
              </div>
              <div>
                  <label for="Subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                  <input type="text" name="Subject"  placeholder="Subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <div>
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                  <input type="text-area" name="description" placeholder="start writing..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
              </div>
              <div>
                  <label for="playlist" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Playlist Url</label>
                  <input type="text" name="playlist"  placeholder="playlist url..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true"/>
              </div>
              <div>
    <label for="Visibility" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Visibility</label>
    <div class="flex items-center mb-4">
        <input type="radio" id="private" name="visibility" value="private" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
        <label for="private" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Private</label>
    </div>
    <div class="flex items-center">
        <input type="radio" id="public" name="visibility" value="public" required class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="public" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Public</label>
    </div>
</div>

             
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Done</button>
          </form>
      </div>




 
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default CreateJourney
