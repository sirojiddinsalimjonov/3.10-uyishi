const orderForm = document.querySelector('.form')
const orderName = document.querySelector('.user-name')
const orderEmail = document.querySelector('.user-email')
const order = document.querySelector('.user-orders')
const orderBtn = document.querySelector('.btn')
const orderList = document.querySelector('.list')
const checked = document.querySelector('.checkbox')

function yourOrder(item) {
    item.preventDefault()
    const orderItem = document.createElement('li')
    orderItem.className = 'w-100 bg-success color-warning p-2 d-flex align-items-center text-warning  mb-3'
    orderItem.textContent = 'yourName:' + orderName.value.trim() +' '+'yourEmail:'+ orderEmail.value.trim() +' '+'yourOrder:'+ order.valuee
    orderName.value = ''
    orderEmail.value = ''
    order.value = ''
    orderItem.append(checked)
    orderList.append(orderItem)
}
orderBtn.addEventListener('click', yourOrder)