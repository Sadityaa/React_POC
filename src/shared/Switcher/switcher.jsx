import { Drawer } from '@mui/material';
import React, { useState } from 'react'
import { FaRegWindowClose } from 'react-icons/fa';
import styles from "./switcher.module.scss";

const Switcher = (props) => {
  const [theme, setTheme] = useState('light');
  const [headerType, setHeaderType] = useState('fixed');

  return (
    <div>
      <Drawer open={props.switch} anchor='right' onClose={props.toggleDrawer} className={styles.switcher}>
        <div className = {`${styles.switcher_title}  d-flex align-items-center justify-content-between`}>
            <h2>Switcher</h2><span><h5><FaRegWindowClose onClick={props.toggleDrawer}/></h5></span>
        </div>
        <div className = {styles.switcher_data}>
          <div className={styles.switcher_selector }>
            <label className={`${styles.switcher_heading} form-label fw-bold text-dark w-100 pa_1`}>Theme Color Mode:</label>
            <div className="row m-0 d-flex align-items-center px_3 py_1">
              <div className="col-4 form-check d-flex align-items-center gap-2">
                <input
                  className={`form-check-input ${styles.custom_radio}`}
                  type="radio"
                  name="themeMode"
                  id="lightMode"
                  value="light"
                  checked={theme === 'light'}
                  onChange={() => setTheme('light')}
                />
                <label className="form-check-label fw-semibold" htmlFor="lightMode">
                  Light
                </label>
              </div>
              <div className="col-4 form-check d-flex align-items-center gap-2">
                <input
                  className={`form-check-input ${styles.custom_radio}`}
                  type="radio"
                  name="themeMode"
                  id="darkMode"
                  value="dark"
                  checked={theme === 'dark'}
                  onChange={() => setTheme('dark')}
                />
                <label className="form-check-label fw-semibold" htmlFor="darkMode">
                  Dark
                </label>
            </div>
          </div>
          </div>

          <div className={styles.switcher_selector }>
            <label className={`${styles.switcher_heading} form-label fw-bold text-dark w-100 pa_1`}>Header Positions:</label>
            <div className="row m-0 d-flex align-items-center px_3 py_1">
              <div className="col-4 form-check d-flex align-items-center gap-2">
                <input
                  className={`form-check-input ${styles.custom_radio}`}
                  type="radio"
                  name="headerType"
                  id="fixed"
                  value="fixed"
                  checked={headerType === 'fixed'}
                  onChange={() => setHeaderType('fixed')}
                />
                <label className="form-check-label fw-semibold" htmlFor="fixed">
                  Fixed
                </label>
              </div>
              <div className="col-4 form-check d-flex align-items-center gap-2">
                <input
                  className={`form-check-input ${styles.custom_radio}`}
                  type="radio"
                  name="headerType"
                  id="scrollable"
                  value="scrollable"
                  checked={headerType === 'scrollable'}
                  onChange={() => setHeaderType('scrollable')}
                />
                <label className="form-check-label fw-semibold" htmlFor="scrollable">
                  Scrollable
                </label>
            </div>
            <div className="col-4 form-check d-flex align-items-center gap-2">
                <input
                  className={`form-check-input ${styles.custom_radio}`}
                  type="radio"
                  name="headerType"
                  id="rounded"
                  value="rounded"
                  checked={headerType === 'rounded'}
                  onChange={() => setHeaderType('rounded')}
                />
                <label className="form-check-label fw-semibold" htmlFor="rounded">
                  Rounded
                </label>
            </div>
          </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Switcher;
