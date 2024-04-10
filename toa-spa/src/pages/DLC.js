import React from 'react'
import dlc from '../img/dlc-bg.png'
import NavBar from '../comps/NavBar'

function DLC() {
  return (
    <div>
      <NavBar  />
        <div className="">
          <img src={dlc} alt="" />
        </div>
        <div className="">
          <div className="overflow-x-auto  px-11">
              <table className="w-auto sm:w-full text-sm text-left rtl:text-right  text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              #
                          </th>
                          <th scope="col" className="px-6 py-3">
                              DLC NAME HOLDER
                          </th>
                          <th scope="col" className="px-6 py-3">
                              DESCRIPTION
                          </th>
                          <th scope="col" className="px-6 py-3">
                              RATING
                          </th>
                          <th scope="col" className="px-6 py-3">
                              <span className="sr-only">Download</span>
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-white border-b  hover:bg-gray-50">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            1
                          </th>
                          <td className="px-6 py-4">
                            DLC 1
                          </td>
                          <td className="px-6 py-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...
                          </td>
                          <td className="px-6 py-4">
                              3.5
                          </td>
                          <td className="px-6 py-4 text-right">
                              <a href="/asds" className="font-medium text-blue-600  hover:underline">Download</a>
                          </td>
                      </tr>
                      <tr className="bg-white border-b  hover:bg-gray-50">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            2
                          </th>
                          <td className="px-6 py-4">
                            DLC 2
                          </td>
                          <td className="px-6 py-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...
                          </td>
                          <td className="px-6 py-4">
                              4.5
                          </td>
                          <td className="px-6 py-4 text-right">
                              <a href="/asds" className="font-medium text-blue-600  hover:underline">Download</a>
                          </td>
                      </tr>
                      <tr className="bg-white border-b  hover:bg-gray-50">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            3
                          </th>
                          <td className="px-6 py-4">
                            DLC 3
                          </td>
                          <td className="px-6 py-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...
                          </td>
                          <td className="px-6 py-4">
                              3.3
                          </td>
                          <td className="px-6 py-4 text-right">
                              <a href="/asds" className="font-medium text-blue-600  hover:underline">Download</a>
                          </td>
                      </tr>
                      <tr className="bg-white border-b  hover:bg-gray-50">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            4
                          </th>
                          <td className="px-6 py-4">
                            DLC 4
                          </td>
                          <td className="px-6 py-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...
                          </td>
                          <td className="px-6 py-4">
                              5.0
                          </td>
                          <td className="px-6 py-4 text-right">
                              <a href="/asds" className="font-medium text-blue-600  hover:underline">Download</a>
                          </td>
                      </tr>
                      <tr className="bg-white border-b  hover:bg-gray-50">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            5
                          </th>
                          <td className="px-6 py-4">
                            DLC 5
                          </td>
                          <td className="px-6 py-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...
                          </td>
                          <td className="px-6 py-4">
                              4.2
                          </td>
                          <td className="px-6 py-4 text-right">
                              <a href="/asds" className="font-medium text-blue-600  hover:underline">Download</a>
                          </td>
                      </tr>
                      <tr className="bg-white border-b  hover:bg-gray-50">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            6
                          </th>
                          <td className="px-6 py-4">
                            DLC 6
                          </td>
                          <td className="px-6 py-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...
                          </td>
                          <td className="px-6 py-4">
                              3.6
                          </td>
                          <td className="px-6 py-4 text-right">
                              <a href="/asds" className="font-medium text-blue-600  hover:underline">Download</a>
                          </td>
                      </tr>
                      <tr className="bg-white border-b  hover:bg-gray-50">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            7
                          </th>
                          <td className="px-6 py-4">
                            DLC 7
                          </td>
                          <td className="px-6 py-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla...
                          </td>
                          <td className="px-6 py-4">
                              1.  5
                          </td>
                          <td className="px-6 py-4 text-right">
                              <a href="/asds" className="font-medium text-blue-600  hover:underline">Download</a>
                          </td>
                      </tr>
                      
                  </tbody>
              </table>
          </div>

        </div>
    </div>
  )
}

export default DLC