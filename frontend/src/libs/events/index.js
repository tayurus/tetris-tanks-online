import _ from 'lodash'

export class EventEmitter {
  listeners = []

  subscribe = (listener) => {
    this.listeners.push(listener)
  }

  unsubscribe = (listener) => {
    this.listeners = _.remove(this.listeners, (l) => l === listener)
  }

  emitSequenceAsync = (data) => {
    return this.listeners.reduce((acc, listener) =>
      acc.then((intermediate) => Promise.resolve(listener(intermediate)))
    , Promise.resolve(data))
  }


  emitSequenceSync = (data) => {
    return this.listeners.reduce((acc, listener) => listener(acc), data)
  }

  emitAsync = (data) => {
    return this.listeners.reduce((acc, listener) =>
      acc.then(() => Promise.resolve(listener(data)))
    , Promise.resolve())
  }

  emitSync = (data) => {
    this.listeners.forEach((listener) => {
      listener(data)
    })
  }

  emitParallelAsync = (data) => {
    return Promise.all(this.listeners.map((listener) => listener(data)))
  }

  emitParallelSync = (data) => {
    return this.listeners.map((listener) => listener(data))
  }
}