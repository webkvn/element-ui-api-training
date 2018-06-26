import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LayOut from '@/components/LayOut'
import Container from '@/components/Container'
import Container_1 from '@/components/Container_1'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Radio from '@/components/Radio'
import Checkbox from '@/components/Checkbox'
import Input from '@/components/Input'
import InputNumber from '@/components/InputNumber'
import Select from '@/components/Select'
import Switch from '@/components/Switch'
import Slider from '@/components/Slider'
import Timepicker from '@/components/Timepicker'
import Datepicker from '@/components/Datepicker'
import Datetimepicker from '@/components/Datetimepicker'
import Upload from '@/components/Upload'
import Rate from '@/components/Rate'
import Colorpicker from '@/components/Colorpicker'
import Transfer from '@/components/Transfer'
import Form from '@/components/Form'
import Table from '@/components/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/layout',
      name: 'LayOut',
      component: LayOut
    },
    {
      path:'/container',
      name: 'Container',
      component: Container
    },
    {
      path:'/container_1',
      name: 'Container_1',
      component: Container_1
    },
    {
      path:'/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path:'/button',
      name: 'Button',
      component: Button
    },
    {
      path:'/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path:'/checkbox',
      name: 'Checkbox',
      component: Checkbox
    },
    {
      path:'/input',
      name: 'Input',
      component: Input
    },
    {
      path:'/inputnumber',
      name: 'InputNumber',
      component: InputNumber
    },
    {
      path:'/select',
      name: 'Select',
      component: Select
    },
    {
      path:'/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path:'/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path:'/timepicker',
      name: 'Timepicker',
      component: Timepicker
    },
    {
      path:'/datepicker',
      name: 'Datepicker',
      component: Datepicker
    },
    {
      path:'/datetimepicker',
      name: 'Datetimepicker',
      component: Datetimepicker
    },   
    {
      path:'/upload',
      name: 'Upload',
      component: Upload
    }, 
    {
      path:'/rate',
      name: 'Rate',
      component: Rate
    }, 
    {
      path:'/colorpicker',
      name: 'Colorpicker',
      component: Colorpicker
    },
    {
      path:'/transfer',
      name: 'Transfer',
      component: Transfer
    },  
    {
      path:'/form',
      name: 'Form',
      component: Form
    }, 
    {
      path:'/table',
      name: 'Table',
      component: Table
    }, 
  ]
})
