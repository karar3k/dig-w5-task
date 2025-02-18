import Switch from 'react-switch'
import ThemeContext from '../contexts/ThemeContext'
import { useContext } from 'react'
export const Switcher = ()=>{
    const context = useContext(ThemeContext)
    console.log('c in switcher',context)
    const name = context.settings.themeValue.name
    const checked = context.settings.checked

    return <label>
    {/* <span>{name}</span> */}
    <div className="relative h-10">
      <div className="absolute top-2 right-2">
      {/* <div class="absolute inset-y-0 right-0 w-16"> */}
        {/* <Switch onChange={context.actions.changeSwitcher} checked={checked} /> */}

        <Switch
            checked={checked}
            onChange={context.actions.changeSwitcher}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />

      </div>
    </div>
  
  </label>
}