// BOM (Browser Object Model)
/*
The Browser Object Model (BOM) provides a way to interact with the browser window and its components beyond just the document content. It includes objects like window, navigator, screen, location, and history that allow JavaScript to control browser behavior and access browser-specific information.
*/
// The BOM provides a way to interact with the browser window and its components.
// It includes objects like window, navigator, screen, and location.

// Window Object
// ---------------------------------------------------------------------------------------------- ::
// The global object representing the browser window.

// Window dimensions
console.log(window.innerWidth)   // Viewport width (excluding scrollbars)
console.log(window.innerHeight)  // Viewport height (excluding scrollbars)
console.log(window.outerWidth)   // Browser window width (including scrollbars/toolbars)
console.log(window.outerHeight)  // Browser window height (including scrollbars/toolbars)

// Window position
console.log(window.screenX)      // Distance from left edge of screen
console.log(window.screenY)      // Distance from top edge of screen

// Dialogs (use sparingly in modern web)
window.alert('Alert message')
window.confirm('Confirm this action?')  // Returns boolean
window.prompt('Enter your name:', 'Default') // Returns string or null

// Window control
window.open('https://example.com', '_blank')
window.close()  // Only works for windows opened by script
window.focus()  // Bring window to front
window.blur()   // Send window to background




// Navigator Object
// ----------------------------------------------------------------------------------------------
// Provides information about the browser.
console.log(navigator.userAgent)
console.log(navigator.language)

// Browser identification
console.log(navigator.userAgent)     // Full browser string
console.log(navigator.appName)       // Browser name
console.log(navigator.appVersion)    // Browser version
console.log(navigator.platform)      // Operating system

// Language and localization
console.log(navigator.language)      // Primary language (e.g., 'en-US')
console.log(navigator.languages)     // Array of preferred languages

// Browser capabilities
console.log(navigator.cookieEnabled) // Boolean - cookies enabled
console.log(navigator.onLine)        // Boolean - online status
console.log(navigator.javaEnabled()) // Boolean - Java enabled

// Geolocation (modern feature)
navigator.geolocation.getCurrentPosition(
    position => console.log(position.coords),
    error => console.error(error)
)

// Service Workers (PWA feature)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
}




// Screen Object
// ----------------------------------------------------------------------------------------------
// Contains information about the user's screen.
console.log(screen.width)
console.log(screen.height)

// Screen dimensions
console.log(screen.width)         // Total screen width
console.log(screen.height)        // Total screen height
console.log(screen.availWidth)    // Available screen width (excluding taskbar)
console.log(screen.availHeight)   // Available screen height (excluding taskbar)

// Screen properties
console.log(screen.colorDepth)    // Color depth in bits
console.log(screen.pixelDepth)    // Pixel depth in bits

// Useful for responsive design
const isSmallScreen = screen.width < 768
const isHighDPI = window.devicePixelRatio > 1




// Location Object
// ----------------------------------------------------------------------------------------------
// Represents the current URL and provides methods to manipulate it.
console.log(location.href)
location.reload()

// URL components
console.log(location.href)        // Full URL
console.log(location.protocol)    // 'http:' or 'https:'
console.log(location.host)        // hostname:port
console.log(location.hostname)    // Just hostname
console.log(location.port)        // Port number
console.log(location.pathname)    // Path after domain
console.log(location.search)      // Query string (?param=value)
console.log(location.hash)        // Fragment identifier (#section)

// URL manipulation
location.href = 'https://example.com'        // Navigate to new URL
location.assign('https://example.com')       // Same as above
location.replace('https://example.com')      // Navigate without history entry
location.reload()                            // Reload current page
location.reload(true)                        // Force reload from server

// Search parameters (modern approach)
const urlParams = new URLSearchParams(location.search)
console.log(urlParams.get('id'))             // Get specific parameter
urlParams.set('page', '2')                   // Set parameter
urlParams.delete('temp')                     // Remove parameter




// History Object
// ----------------------------------------------------------------------------------------------
// Represents the user's session history.
console.log(history.length)
history.back()
history.forward()

// History information
console.log(history.length)       // Number of entries in history

// Navigation methods
history.back()                     // Go back one page
history.forward()                  // Go forward one page
history.go(-2)                     // Go back 2 pages
history.go(1)                      // Go forward 1 page

// Modern history manipulation (SPA routing)
history.pushState({ page: 1 }, 'Title', '/page1')  // Add history entry
history.replaceState({ page: 2 }, 'Title', '/page2') // Replace current entry

// Listen for navigation
window.addEventListener('popstate', function (event) {
    console.log('Location changed:', location.pathname)
    console.log('State:', event.state)
})




// Timing Functions
// ---------------------------------------------------------------------------------------------- ::
// setTimeout - Execute once after delay
const timeoutId = setTimeout(() => {
    console.log('Executed after 2 seconds')
}, 2000)
clearTimeout(timeoutId)  // Cancel timeout

// setInterval - Execute repeatedly
const intervalId = setInterval(() => {
    console.log('Executed every 1 second')
}, 1000)
clearInterval(intervalId)  // Stop interval

// requestAnimationFrame - Smooth animations (60fps)
function animate() {
    // Animation logic here
    requestAnimationFrame(animate)
}
requestAnimationFrame(animate)




// Viewport and Scrolling
// ---------------------------------------------------------------------------------------------- ::
// Scroll position
console.log(window.pageXOffset)   // Horizontal scroll (deprecated: use scrollX)
console.log(window.pageYOffset)   // Vertical scroll (deprecated: use scrollY)
console.log(window.scrollX)       // Modern horizontal scroll
console.log(window.scrollY)       // Modern vertical scroll

// Scrolling control
window.scrollTo(0, 100)           // Scroll to specific position
window.scrollTo({
    top: 100,
    left: 0,
    behavior: 'smooth'              // Smooth scrolling
})
window.scrollBy(0, 50)            // Scroll by relative amount

// Scroll events
window.addEventListener('scroll', function () {
    console.log('Scroll position:', window.scrollY)
})




// Print and Media
// ---------------------------------------------------------------------------------------------- ::
// Print functionality
window.print()

// Media queries in JavaScript
const mediaQuery = window.matchMedia('(max-width: 768px)')
console.log(mediaQuery.matches)   // Boolean

mediaQuery.addListener((mq) => {
    if (mq.matches) {
        console.log('Mobile view')
    } else {
        console.log('Desktop view')
    }
})




// Storage APIs
// ---------------------------------------------------------------------------------------------- ::
// Local Storage (persistent)
localStorage.setItem('user', JSON.stringify({ name: 'John' }))
const user = JSON.parse(localStorage.getItem('user'))
localStorage.removeItem('user')
localStorage.clear()

// Session Storage (tab-scoped)
sessionStorage.setItem('tempData', 'value')
const tempData = sessionStorage.getItem('tempData')

// Storage events (cross-tab communication)
window.addEventListener('storage', function (e) {
    console.log('Storage changed:', e.key, e.newValue)
})




// Network Information
// ---------------------------------------------------------------------------------------------- ::
// Online/Offline detection
console.log(navigator.onLine)

window.addEventListener('online', () => {
    console.log('Back online')
})

window.addEventListener('offline', () => {
    console.log('Gone offline')
})

// Network information (experimental)
if ('connection' in navigator) {
    console.log('Connection type:', navigator.connection.effectiveType)
    console.log('Downlink speed:', navigator.connection.downlink)
}




// Clipboard API
// ---------------------------------------------------------------------------------------------- ::
// Modern clipboard operations
navigator.clipboard.writeText('Hello, clipboard!')
    .then(() => console.log('Text copied'))
    .catch(err => console.error('Copy failed:', err))

navigator.clipboard.readText()
    .then(text => console.log('Clipboard content:', text))
    .catch(err => console.error('Read failed:', err))




// Notifications
// ---------------------------------------------------------------------------------------------- ::
// Desktop notifications
if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification('Hello!', {
                body: 'This is a notification',
                icon: '/icon.png'
            })
        }
    })
}




// Responsive Design Detection
// ---------------------------------------------------------------------------------------------- ::
function getDeviceType() {
    if (window.innerWidth <= 768) return 'mobile'
    if (window.innerWidth <= 1024) return 'tablet'
    return 'desktop'
}

// Update UI based on device
window.addEventListener('resize', () => {
    const device = getDeviceType()
    document.body.className = device
})




// SPA Route Management
// ---------------------------------------------------------------------------------------------- ::
function navigateTo(path, data = {}) {
    history.pushState(data, '', path)
    loadPage(path)
}

window.addEventListener('popstate', (event) => {
    loadPage(location.pathname, event.state)
})




// Analytics and Tracking
// ---------------------------------------------------------------------------------------------- ::
function trackPageView() {
    const pageData = {
        url: location.href,
        title: document.title,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        screenSize: `${screen.width}x${screen.height}`
    }

    // Send to analytics service
    fetch('/api/analytics', {
        method: 'POST',
        body: JSON.stringify(pageData)
    })
}




// Auto-save Functionality
// ---------------------------------------------------------------------------------------------- ::
let autoSaveTimer
function setupAutoSave(formData) {
    clearTimeout(autoSaveTimer)
    autoSaveTimer = setTimeout(() => {
        localStorage.setItem('draft', JSON.stringify(formData))
        console.log('Draft saved')
    }, 2000)  // Auto-save after 2 seconds of inactivity
}




// Cross-Browser Compatibility
// ---------------------------------------------------------------------------------------------- ::
// Always check for feature support
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(success, error)
}

// Use feature detection, not browser detection
const hasLocalStorage = typeof (Storage) !== 'undefined'




//  Security Considerations
// ---------------------------------------------------------------------------------------------- ::
// Popup blockers
const newWindow = window.open('popup.html')
if (!newWindow) {
    alert('Please allow popups for this site')
}

// Same-origin policy affects cross-frame access
try {
    console.log(parent.window.location)  // May throw error
} catch (e) {
    console.log('Cross-origin access blocked')
}




// Performance Best Practices
// ---------------------------------------------------------------------------------------------- ::
// Debounce scroll/resize events
let resizeTimer
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(handleResize, 100)
})

// Use requestAnimationFrame for smooth animations
function smoothScroll(target) {
    const start = window.scrollY
    const distance = target - start
    let startTime = null

    function animation(currentTime) {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / 500, 1)
        window.scrollTo(0, start + distance * progress)

        if (progress < 1) {
            requestAnimationFrame(animation)
        }
    }

    requestAnimationFrame(animation)
}




// Router Implementation
// ---------------------------------------------------------------------------------------------- ::
class SimpleRouter {
    constructor() {
        this.routes = {}
        window.addEventListener('popstate', () => this.handleRoute())
    }

    route(path, handler) {
        this.routes[path] = handler
    }

    navigate(path, data = {}) {
        history.pushState(data, '', path)
        this.handleRoute()
    }

    handleRoute() {
        const path = location.pathname
        const handler = this.routes[path] || this.routes['404']
        if (handler) handler()
    }
}
