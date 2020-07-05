Методы:

- регистрация:
  - метод: POST
  - url: /register
  - headers: {content-type: 'application/json'}
  - body: {name: string} - name не может быть пустым
  - response: {id: number} - id зарегистрированного пользователя
