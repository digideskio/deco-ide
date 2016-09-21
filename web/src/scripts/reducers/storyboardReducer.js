/**
 *    Copyright (C) 2015 Deco Software Inat.
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License, version 3,
 *    as published by the Free Software Foundation.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 *
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


import { storyboardConstants as at } from '../actions'

const initialState = {}

export default (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case at.ADD_SCENE: {
      return {...state}
    }

    case at.OPEN_STORYBOARD: {
      return {...state}
    }

    case at.DELETE_SCENE: {
      return {...state}
    }

    case at.ADD_CONNECTION: {
      return {...state}
    }

    case at.UPDATE_CONNECTION: {
      return {...state}
    }

    case at.DELETE_CONNECTION: {
      return {...state}
    }

    case at.SET_ENTRY_SCENE: {
      return {...state}
    }

    default: {
      return state
    }
  }
}
