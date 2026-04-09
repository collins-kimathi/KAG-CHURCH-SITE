import kagLogo from '../../Images/logo.png'

function LoadingScreen({ visible }) {
  return (
    <div
      aria-hidden={!visible}
      aria-live="polite"
      className={`loading-screen${visible ? ' is-visible' : ''}`}
      role="status"
    >
      <div className="loading-screen__backdrop" />
      <div className="loading-screen__content">
        <div className="loading-screen__logo-wrap">
          <span className="loading-screen__ring loading-screen__ring--outer" />
          <span className="loading-screen__ring loading-screen__ring--inner" />
          <img
            className="loading-screen__logo"
            src={kagLogo}
            alt="Kenya Assemblies of God logo"
          />
        </div>
        <p className="loading-screen__title">KAG Chuka Church</p>
        <p className="loading-screen__text">Preparing your visit...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
