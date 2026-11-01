(function() {
  "use strict";
  const React = window.React;
  const useAppStore = window.useAppStore;
  const TRANSLATIONS = {
    en: {
      focusMode: "Focus Mode",
      minutes: "Minutes",
      seconds: "Seconds",
      loop: "Loop",
      start: "Start",
      stop: "Stop",
      focusModeFinished: "Focus Mode Finished",
      focusModeFinishedDesc: "Your focus session has ended. Take a break!",
      pause: "Pause",
      resume: "Resume",
      ambience: "Ambience",
      close: "Close",
      barLeft: "Focus mode — {n} min left",
      barLessThanMinute: "Focus mode — less than a minute left",
      barPaused: "Focus mode — paused, {n} min left"
    },
    tr: {
      focusMode: "Odak Modu",
      minutes: "Dakika",
      seconds: "Saniye",
      loop: "Döngü",
      start: "Başlat",
      stop: "Durdur",
      focusModeFinished: "Odaklanma Modu Bitti",
      focusModeFinishedDesc: "Odaklanma süreniz doldu. Biraz ara verin!",
      pause: "Duraklat",
      resume: "Devam et",
      ambience: "Ortam sesi",
      close: "Kapat",
      barLeft: "Odak modu — {n} dakika kaldı",
      barLessThanMinute: "Odak modu — bir dakikadan az kaldı",
      barPaused: "Odak modu — duraklatıldı, {n} dakika kaldı"
    },
    de: {
      focusMode: "Fokus-Modus",
      minutes: "Minuten",
      seconds: "Sekunden",
      loop: "Schleife",
      start: "Starten",
      stop: "Stoppen",
      focusModeFinished: "Fokus-Modus beendet",
      focusModeFinishedDesc: "Ihre Fokus-Sitzung ist beendet. Machen Sie eine Pause!",
      pause: "Pause",
      resume: "Fortsetzen",
      ambience: "Atmosphäre",
      close: "Schließen",
      barLeft: "Fokus-Modus — noch {n} Min.",
      barLessThanMinute: "Fokus-Modus — weniger als eine Minute übrig",
      barPaused: "Fokus-Modus — pausiert, noch {n} Min."
    },
    fr: {
      focusMode: "Mode Concentration",
      minutes: "Minutes",
      seconds: "Secondes",
      loop: "Boucle",
      start: "Démarrer",
      stop: "Arrêter",
      focusModeFinished: "Mode Concentration Terminé",
      focusModeFinishedDesc: "Votre session de concentration est terminée. Faites une pause !",
      pause: "Pause",
      resume: "Reprendre",
      ambience: "Ambiance",
      close: "Fermer",
      barLeft: "Mode Concentration — {n} min restantes",
      barLessThanMinute: "Mode Concentration — moins d’une minute restante",
      barPaused: "Mode Concentration — en pause, {n} min restantes"
    },
    es: {
      focusMode: "Modo Concentración",
      minutes: "Minutos",
      seconds: "Segundos",
      loop: "Bucle",
      start: "Iniciar",
      stop: "Detener",
      focusModeFinished: "Modo Concentración Finalizado",
      focusModeFinishedDesc: "Tu sesión de concentración ha terminado. ¡Toma un descanso!",
      pause: "Pausar",
      resume: "Reanudar",
      ambience: "Ambiente",
      close: "Cerrar",
      barLeft: "Modo Concentración — quedan {n} min",
      barLessThanMinute: "Modo Concentración — queda menos de un minuto",
      barPaused: "Modo Concentración — en pausa, quedan {n} min"
    },
    zh: {
      focusMode: "专注模式",
      minutes: "分钟",
      seconds: "秒",
      loop: "循环",
      start: "开始",
      stop: "停止",
      focusModeFinished: "专注模式结束",
      focusModeFinishedDesc: "您的专注时间已结束。休息一下吧！",
      pause: "暂停",
      resume: "继续",
      ambience: "氛围音",
      close: "关闭",
      barLeft: "专注模式 — 还剩 {n} 分钟",
      barLessThanMinute: "专注模式 — 不到一分钟",
      barPaused: "专注模式 — 已暂停，还剩 {n} 分钟"
    },
    ja: {
      focusMode: "集中モード",
      minutes: "分",
      seconds: "秒",
      loop: "ループ",
      start: "開始",
      stop: "停止",
      focusModeFinished: "集中モード終了",
      focusModeFinishedDesc: "集中セッションが終了しました。休憩してください！",
      pause: "一時停止",
      resume: "再開",
      ambience: "環境音",
      close: "閉じる",
      barLeft: "集中モード — 残り {n} 分",
      barLessThanMinute: "集中モード — 残り1分未満",
      barPaused: "集中モード — 一時停止中、残り {n} 分"
    },
    ru: {
      focusMode: "Режим фокуса",
      minutes: "Минуты",
      seconds: "Секунды",
      loop: "Цикл",
      start: "Старт",
      stop: "Стоп",
      focusModeFinished: "Режим фокуса завершен",
      focusModeFinishedDesc: "Ваш сеанс фокусировки завершен. Сделайте перерыв!",
      pause: "Пауза",
      resume: "Продолжить",
      ambience: "Атмосфера",
      close: "Закрыть",
      barLeft: "Режим фокуса — осталось {n} мин",
      barLessThanMinute: "Режим фокуса — осталось меньше минуты",
      barPaused: "Режим фокуса — пауза, осталось {n} мин"
    },
    ar: {
      focusMode: "وضع التركيز",
      minutes: "دقائق",
      seconds: "ثواني",
      loop: "تكرار",
      start: "ابدأ",
      stop: "إيقاف",
      focusModeFinished: "انتهى وضع التركيز",
      focusModeFinishedDesc: "انتهت جلسة التركيز الخاصة بك. خذ استراحة!",
      pause: "إيقاف مؤقت",
      resume: "استئناف",
      ambience: "الأجواء",
      close: "إغلاق",
      barLeft: "وضع التركيز — تبقى {n} دقيقة",
      barLessThanMinute: "وضع التركيز — تبقى أقل من دقيقة",
      barPaused: "وضع التركيز — متوقف مؤقتًا، تبقى {n} دقيقة"
    },
    hi: {
      focusMode: "फोकस मोड",
      minutes: "मिनट",
      seconds: "सेकंड",
      loop: "लूप",
      start: "प्रारंभ",
      stop: "रोकें",
      focusModeFinished: "फोकस मोड समाप्त",
      focusModeFinishedDesc: "आपका फोकस सत्र समाप्त हो गया है। ब्रेक लें!",
      pause: "रोकें",
      resume: "फिर शुरू करें",
      ambience: "माहौल",
      close: "बंद करें",
      barLeft: "फोकस मोड — {n} मिनट बचे",
      barLessThanMinute: "फोकस मोड — एक मिनट से कम बचा",
      barPaused: "फोकस मोड — रुका हुआ, {n} मिनट बचे"
    }
  };
  const getLocalText = (key) => {
    const lang = useAppStore.getState().language || "en";
    const dict = TRANSLATIONS[lang] || TRANSLATIONS["en"];
    return dict[key] || key;
  };
  const ICON_FONT = "'Material Symbols Rounded', 'Material Symbols Outlined'";
  const iconStyle = (size, fill = 0) => ({
    fontFamily: ICON_FONT,
    fontSize: size,
    fontVariationSettings: `'FILL' ${fill}, 'wght' 400`
  });
  const pad2 = (n) => String(n).padStart(2, "0");
  const formatClock = (totalSeconds) => `${pad2(Math.floor(totalSeconds / 60))}:${pad2(totalSeconds % 60)}`;
  class FocusStore {
    constructor() {
      this.state = {
        isFocusPopupOpen: false,
        focusAnchorRect: null,
        focusSettings: { minutes: 25, seconds: 0, melody: "Calming", loop: false },
        isFocusActive: false,
        focusRemainingTime: 0,
        focusTotalTime: 0,
        isPaused: false,
        isAlarmRinging: false
      };
      this.listeners = /* @__PURE__ */ new Set();
      this.interval = null;
      this.alarmAudio = null;
    }
    getState() {
      return this.state;
    }
    setState(partial) {
      this.state = { ...this.state, ...partial };
      this.notify();
    }
    subscribe(listener) {
      this.listeners.add(listener);
      return () => this.listeners.delete(listener);
    }
    notify() {
      for (const listener of this.listeners) {
        listener();
      }
    }
    startTimer() {
      const total = this.state.focusSettings.minutes * 60 + this.state.focusSettings.seconds;
      if (total > 0) {
        this.setState({ isFocusActive: true, focusRemainingTime: total, focusTotalTime: total, isPaused: false, isAlarmRinging: false });
        this.stopAlarm();
        if (this.interval) clearInterval(this.interval);
        let lastTime = total;
        this.interval = setInterval(() => {
          if (this.state.isPaused) return;
          const current = this.state.focusRemainingTime;
          if (current <= 1) {
            this.setState({ focusRemainingTime: 0 });
            if (this.state.isFocusActive && lastTime > 0 && this.state.focusRemainingTime === 0) {
              this.triggerAlarm();
              this.sendNotification();
              this.setState({ isFocusActive: false });
            }
          } else {
            this.setState({ focusRemainingTime: current - 1 });
          }
          lastTime = this.state.focusRemainingTime;
        }, 1e3);
      }
    }
    pauseTimer() {
      if (this.state.isFocusActive && !this.state.isPaused) this.setState({ isPaused: true });
    }
    resumeTimer() {
      if (this.state.isFocusActive && this.state.isPaused) this.setState({ isPaused: false });
    }
    stopTimer() {
      if (this.interval) clearInterval(this.interval);
      this.setState({ isFocusActive: false, isPaused: false, focusRemainingTime: 0, focusTotalTime: 0 });
      this.stopAlarm();
    }
    async triggerAlarm() {
      try {
        const base64 = await window.api?.getMelodyAudio("Alarm");
        if (base64) {
          if (!this.alarmAudio) {
            this.alarmAudio = new Audio();
          }
          this.alarmAudio.src = `${base64}`;
          this.alarmAudio.loop = this.state.focusSettings.loop;
          this.alarmAudio.load();
          this.alarmAudio.play();
          this.setState({ isAlarmRinging: true });
        }
      } catch (e) {
        console.error("Alarm play error", e);
      }
    }
    stopAlarm() {
      if (this.alarmAudio) {
        this.alarmAudio.pause();
        this.alarmAudio.currentTime = 0;
      }
      this.setState({ isAlarmRinging: false });
    }
    sendNotification() {
      const title = getLocalText("focusModeFinished");
      const desc = getLocalText("focusModeFinishedDesc");
      window.api?.sendNotification?.(title, desc);
    }
  }
  const focusStore = new FocusStore();
  const BAR_ID = "focus-mode-plugin-btn";
  const barApi = () => {
    const ext = window.KoBarExtensions;
    return ext && typeof ext.setBarItemState === "function" ? ext : null;
  };
  let barVisible = true;
  let barLastKey = "";
  let barLastAt = 0;
  const compactValue = (seconds) => seconds >= 6e3 ? `${Math.floor(seconds / 3600)}h${pad2(Math.floor(seconds % 3600 / 60))}` : formatClock(seconds);
  const pushBarState = (force) => {
    const ext = barApi();
    if (!ext || !barVisible) return;
    const s = focusStore.getState();
    const rem = s.focusRemainingTime;
    const lang = useAppStore.getState().language || "en";
    const key = `${s.isFocusActive}|${s.isPaused}|${rem}|${lang}`;
    const now = Date.now();
    if (!force && (key === barLastKey || now - barLastAt < 900)) return;
    barLastKey = key;
    barLastAt = now;
    const tr = (k) => getLocalText(k);
    let state;
    if (s.isFocusActive) {
      const total = Math.max(1, s.focusTotalTime);
      const minutes = Math.floor(rem / 60);
      let label;
      if (s.isPaused) label = tr("barPaused").replace("{n}", String(Math.max(1, minutes)));
      else if (minutes < 1) label = tr("barLessThanMinute");
      else label = tr("barLeft").replace("{n}", String(minutes));
      state = {
        label,
        value: compactValue(rem),
        progress: Math.min(1, Math.max(0, 1 - rem / total)),
        icon: s.isPaused ? "pause" : void 0
      };
    } else {
      state = { label: tr("focusMode"), progress: 0 };
    }
    try {
      ext.setBarItemState(BAR_ID, state);
    } catch (e) {
    }
  };
  focusStore.subscribe(() => pushBarState(false));
  useAppStore.subscribe((state, prev) => {
    if (state.language !== prev.language) pushBarState(true);
  });
  if (typeof window.KoBarExtensions?.onBarItemChange === "function") {
    try {
      window.KoBarExtensions.onBarItemChange(BAR_ID, (info) => {
        const visible = !info || info.visible !== false;
        const changed = visible !== barVisible;
        barVisible = visible;
        if (visible && (changed || info)) pushBarState(true);
      });
    } catch (e) {
    }
  } else {
    pushBarState(true);
  }
  function useFocusStore() {
    const [state, setState] = React.useState(focusStore.getState());
    React.useEffect(() => {
      return focusStore.subscribe(() => setState(focusStore.getState()));
    }, []);
    return state;
  }
  const TooltipButton = ({ label, onClick, className, style, children, buttonRef }) => {
    const internalRef = React.useRef(null);
    const ref = buttonRef || internalRef;
    const [visible, setVisible] = React.useState(false);
    const [pos, setPos] = React.useState({ x: 0, y: 0, edgePosition: "left" });
    const handleMouseEnter = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const edgePosition = window.useAppStore?.getState().edgePosition || "left";
        const x = edgePosition === "left" ? rect.left - 8 : rect.right + 8;
        const y = rect.top + rect.height / 2;
        setPos({ x, y, edgePosition });
      }
      setVisible(true);
    };
    const handleMouseLeave = () => setVisible(false);
    return /* @__PURE__ */ window.React.createElement(window.React.Fragment, null, /* @__PURE__ */ window.React.createElement(
      "button",
      {
        ref,
        onClick: (e) => {
          setVisible(false);
          if (onClick) onClick(e);
        },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: `group relative ${className}`,
        style
      },
      children
    ), visible && label && window.ReactDOM && window.ReactDOM.createPortal(
      /* @__PURE__ */ window.React.createElement(
        "div",
        {
          className: "fixed pointer-events-none whitespace-nowrap border rounded-lg py-1.5 px-3 shadow-lg text-xs font-semibold text-primary",
          style: {
            zIndex: 999999,
            backgroundColor: "var(--theme-bg-base)",
            borderColor: "var(--theme-border)",
            top: pos.y,
            left: pos.edgePosition === "left" ? pos.x - 4 : pos.x,
            transform: pos.edgePosition === "left" ? "translate(-100%, -50%)" : "translate(0%, -50%)"
          }
        },
        label
      ),
      document.body
    ));
  };
  const FocusButtonWidget = () => {
    const store = useFocusStore();
    const [lang, setLang] = React.useState(() => useAppStore.getState().language);
    React.useEffect(() => {
      return useAppStore.subscribe((state) => {
        setLang(state.language);
      });
    }, []);
    const t = getLocalText;
    const buttonRef = React.useRef(null);
    const formatTime = (totalSeconds) => {
      const m = Math.floor(totalSeconds / 60);
      const s = totalSeconds % 60;
      return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };
    const handleMainButtonClick = (e) => {
      if (store.isAlarmRinging) {
        focusStore.stopAlarm();
        return;
      }
      const rect = buttonRef.current?.getBoundingClientRect() || e.currentTarget.getBoundingClientRect();
      focusStore.setState({
        focusAnchorRect: rect,
        isFocusPopupOpen: !store.isFocusPopupOpen
      });
    };
    return /* @__PURE__ */ window.React.createElement("div", { className: "relative group flex items-center justify-center w-full no-drag-region" }, /* @__PURE__ */ window.React.createElement(
      TooltipButton,
      {
        buttonRef,
        onClick: handleMainButtonClick,
        className: "relative focus-trigger-btn flex items-center justify-center rounded-md transition-colors text-slate-400 hover:text-white hover:bg-white/10 active:scale-95",
        style: { width: "var(--kb-bar-item, 36px)", height: "var(--kb-bar-item, 36px)" },
        label: t("focusMode")
      },
      store.isFocusActive ? /* @__PURE__ */ window.React.createElement("span", { className: "text-xs font-bold tracking-wider" }, formatTime(store.focusRemainingTime)) : /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: "var(--kb-bar-icon, 20px)" } }, "hourglass_empty")
    ));
  };
  if (typeof window.KoBarExtensions.setBarItemState === "function" && typeof window.KoBarExtensions.registerSidebarButton === "function") {
    window.KoBarExtensions.registerSidebarButton({
      id: "focus-mode-plugin-btn",
      icon: "hourglass_empty",
      label: getLocalText("focusMode"),
      tile: { template: "ring", live: true, pinnable: true },
      onClick: (e, anchorRect) => {
        const st = focusStore.getState();
        if (st.isAlarmRinging) {
          focusStore.stopAlarm();
          return;
        }
        focusStore.setState({ focusAnchorRect: anchorRect, isFocusPopupOpen: !st.isFocusPopupOpen });
      }
    });
  } else {
    window.KoBarExtensions.registerInlineWidget("focus-mode-plugin-btn", {
      id: "focus-mode-plugin-btn",
      render: () => React.createElement(FocusButtonWidget)
    });
  }
  const MELODIES = ["Alarm", "Bells", "Calming", "Cosmic", "Guitar", "Hiphop", "Ringtones"];
  const FocusPopupWidget = ({ onClose, anchorRect }) => {
    const store = useFocusStore();
    const [appState, setAppState] = React.useState(() => {
      const s = useAppStore.getState();
      return {
        language: s.language,
        screenBounds: s.screenBounds,
        sidebarPosition: s.sidebarPosition,
        orientation: s.orientation,
        isPopupSmartPositioning: s.isPopupSmartPositioning,
        edgePosition: s.edgePosition
      };
    });
    React.useEffect(() => {
      return useAppStore.subscribe((state) => {
        setAppState({
          language: state.language,
          screenBounds: state.screenBounds,
          sidebarPosition: state.sidebarPosition,
          orientation: state.orientation,
          isPopupSmartPositioning: state.isPopupSmartPositioning,
          edgePosition: state.edgePosition
        });
      });
    }, []);
    const t = getLocalText;
    const [isPlayingPreview, setIsPlayingPreview] = React.useState(false);
    const [melodyDropdownOpen, setMelodyDropdownOpen] = React.useState(false);
    const audioPreviewRef = React.useRef(null);
    const localMin = store.focusSettings.minutes;
    const localSec = store.focusSettings.seconds;
    const localMelody = store.focusSettings.melody;
    const localLoop = store.focusSettings.loop;
    const setLocalMin = (updater) => {
      const val = typeof updater === "function" ? updater(localMin) : updater;
      focusStore.setState({ focusSettings: { ...store.focusSettings, minutes: val } });
    };
    const setLocalSec = (updater) => {
      const val = typeof updater === "function" ? updater(localSec) : updater;
      focusStore.setState({ focusSettings: { ...store.focusSettings, seconds: val } });
    };
    const setLocalMelody = (updater) => {
      const val = typeof updater === "function" ? updater(localMelody) : updater;
      focusStore.setState({ focusSettings: { ...store.focusSettings, melody: val } });
    };
    const setLocalLoop = (updater) => {
      const val = typeof updater === "function" ? updater(localLoop) : updater;
      focusStore.setState({ focusSettings: { ...store.focusSettings, loop: val } });
    };
    const popupRef = React.useRef(null);
    const stopPreview = () => {
      if (audioPreviewRef.current) {
        audioPreviewRef.current.pause();
        audioPreviewRef.current.currentTime = 0;
      }
      setIsPlayingPreview(false);
    };
    const togglePreview = async () => {
      if (isPlayingPreview) {
        stopPreview();
        return;
      }
      try {
        const base64 = await window.api?.getMelodyAudio(localMelody);
        if (base64) {
          if (!audioPreviewRef.current) {
            audioPreviewRef.current = new Audio();
          }
          audioPreviewRef.current.src = `${base64}`;
          audioPreviewRef.current.load();
          audioPreviewRef.current.play();
          setIsPlayingPreview(true);
          audioPreviewRef.current.onended = () => setIsPlayingPreview(false);
        }
      } catch (e) {
        console.error("Preview error", e);
      }
    };
    const handleStart = () => {
      stopPreview();
      focusStore.startTimer();
      onClose();
    };
    React.useEffect(() => {
      const handleClickOutside = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
          if (!e.target.closest(".focus-trigger-btn")) {
            onClose();
          }
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);
    const getPopupStyle = () => {
      if (!anchorRect) return { display: "none" };
      const popupHeight = 600;
      const popupWidth = 320;
      const screenHeight = appState.screenBounds?.height ?? 800;
      const screenWidth = appState.screenBounds?.width ?? 1200;
      const offsetTop = appState.sidebarPosition ? appState.sidebarPosition.y : 0;
      const offsetLeft = appState.sidebarPosition ? appState.sidebarPosition.x : 0;
      const style = {
        position: "absolute",
        zIndex: 99999,
        backgroundColor: "var(--theme-surface)",
        borderColor: "var(--theme-border)",
        willChange: "transform, opacity",
        transitionProperty: "opacity, transform, filter"
      };
      const screenXInViewport = (appState.screenBounds?.x ?? 0) - window.screenX;
      const screenYInViewport = (appState.screenBounds?.y ?? 0) - window.screenY;
      if (appState.orientation === "horizontal") {
        let adjustedLeft = anchorRect.left - offsetLeft + anchorRect.width / 2 - popupWidth / 2;
        const maxLeft = screenXInViewport + (screenWidth - offsetLeft) - popupWidth - 20;
        const minLeft = screenXInViewport - offsetLeft + 20;
        if (adjustedLeft < minLeft) adjustedLeft = minLeft;
        if (adjustedLeft > maxLeft) adjustedLeft = maxLeft;
        if (!appState.isPopupSmartPositioning) {
          style.left = "50%";
          style.transform = "translateX(-50%)";
        } else {
          style.left = adjustedLeft;
        }
        if (appState.edgePosition === "top") {
          style.top = "100%";
          style.marginTop = "12px";
        } else {
          style.bottom = "100%";
          style.marginBottom = "12px";
        }
      } else {
        let adjustedTop = anchorRect.top - offsetTop - 20 + anchorRect.height / 2 - popupHeight / 2;
        const maxTop = screenYInViewport + (screenHeight - offsetTop) - popupHeight - 20;
        const minTop = screenYInViewport - offsetTop + 20;
        if (adjustedTop < minTop) adjustedTop = minTop;
        if (adjustedTop > maxTop) adjustedTop = maxTop;
        if (!appState.isPopupSmartPositioning) {
          style.top = "50%";
          style.transform = "translateY(-50%)";
        } else {
          style.top = adjustedTop;
        }
        if (appState.edgePosition === "left") {
          style.left = "100%";
          style.marginLeft = "12px";
        } else {
          style.right = "100%";
          style.marginRight = "12px";
        }
      }
      return style;
    };
    const isSmartRef = React.useRef(appState.isPopupSmartPositioning);
    React.useEffect(() => {
      isSmartRef.current = appState.isPopupSmartPositioning;
    }, [appState.isPopupSmartPositioning]);
    React.useEffect(() => {
      const onDrag = (e) => {
        if (!popupRef.current || !anchorRect || !isSmartRef.current) return;
        const newX = e.detail.x;
        const newY = e.detail.y;
        const popupHeight = 600;
        const popupWidth = 320;
        const screenXInViewport = (appState.screenBounds?.x ?? 0) - window.screenX;
        const screenYInViewport = (appState.screenBounds?.y ?? 0) - window.screenY;
        if (appState.orientation === "horizontal") {
          const screenWidth = appState.screenBounds?.width ?? 1200;
          let adjustedLeft = anchorRect.left - newX + anchorRect.width / 2 - popupWidth / 2;
          const maxLeft = screenXInViewport + (screenWidth - newX) - popupWidth - 20;
          const minLeft = screenXInViewport - newX + 20;
          if (adjustedLeft < minLeft) adjustedLeft = minLeft;
          if (adjustedLeft > maxLeft) adjustedLeft = maxLeft;
          popupRef.current.style.left = `${adjustedLeft}px`;
        } else {
          const screenHeight = appState.screenBounds?.height ?? 800;
          let adjustedTop = anchorRect.top - newY - 20 + anchorRect.height / 2 - popupHeight / 2;
          const maxTop = screenYInViewport + (screenHeight - newY) - popupHeight - 20;
          const minTop = screenYInViewport - newY + 20;
          if (adjustedTop < minTop) adjustedTop = minTop;
          if (adjustedTop > maxTop) adjustedTop = maxTop;
          popupRef.current.style.top = `${adjustedTop}px`;
        }
      };
      document.addEventListener("kobar-drag", onDrag);
      return () => document.removeEventListener("kobar-drag", onDrag);
    }, [anchorRect, appState.screenBounds, appState.orientation]);
    const ringSize = 200;
    const ringStroke = 12;
    const ringR = (ringSize - ringStroke) / 2;
    const ringC = 2 * Math.PI * ringR;
    const progress = store.isFocusActive ? Math.min(1, Math.max(0, 1 - store.focusRemainingTime / Math.max(1, store.focusTotalTime))) : 0;
    const shownSeconds = store.isFocusActive ? store.focusRemainingTime : localMin * 60 + localSec;
    const cTonal = { background: "var(--kb-bg-container, var(--theme-accent-glow, rgba(255,255,255,.1)))", color: "var(--kb-on-container, #fff)" };
    const cInset = "var(--kb-bg-inset, rgba(0,0,0,.25))";
    const circleBtn = { ...cTonal, width: 44, height: 44, borderRadius: 22, border: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" };
    const stepBtn = { width: 36, height: 40, border: 0, background: "transparent", color: "var(--kb-fg-2, #aab)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" };
    const stepInput = { flex: 1, minWidth: 0, width: 0, textAlign: "center", fontSize: 16, background: "transparent", border: 0, outline: "none", color: "var(--kb-fg-1, #fff)", fontVariantNumeric: "tabular-nums" };
    const dis = (d) => d ? { opacity: 0.4, cursor: "not-allowed" } : null;
    React.useEffect(() => {
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);
    const renderStepper = (label, value, min, max, onSet) => /* @__PURE__ */ window.React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ window.React.createElement("label", { style: { fontSize: 12, color: "var(--kb-fg-2, #aab)", display: "block", textAlign: "center", marginBottom: 6 } }, label), /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", alignItems: "center", background: cInset, borderRadius: 16, overflow: "hidden" } }, /* @__PURE__ */ window.React.createElement("button", { type: "button", "aria-label": `${label} −`, disabled: store.isFocusActive || value <= min, onClick: () => onSet(Math.max(min, value - 1)), style: { ...stepBtn, ...dis(store.isFocusActive || value <= min) } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(18) }, "remove")), /* @__PURE__ */ window.React.createElement(
      "input",
      {
        type: "text",
        inputMode: "numeric",
        pattern: "[0-9]*",
        "aria-label": label,
        disabled: store.isFocusActive,
        value: value !== void 0 ? String(value).padStart(2, "0") : "00",
        onChange: (e) => {
          let val = parseInt(e.target.value.replace(/\D/g, ""), 10);
          if (isNaN(val)) val = 0;
          onSet(Math.min(max, Math.max(min, val)));
        },
        className: "no-drag-region",
        style: stepInput
      }
    ), /* @__PURE__ */ window.React.createElement("button", { type: "button", "aria-label": `${label} +`, disabled: store.isFocusActive || value >= max, onClick: () => onSet(Math.min(max, value + 1)), style: { ...stepBtn, ...dis(store.isFocusActive || value >= max) } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(18) }, "add"))));
    const startDisabled = !store.isFocusActive && localMin === 0 && localSec === 0;
    const mainAction = () => {
      if (!store.isFocusActive) {
        handleStart();
        return;
      }
      if (store.isPaused) focusStore.resumeTimer();
      else focusStore.pauseTimer();
    };
    const mainIcon = store.isFocusActive && !store.isPaused ? "pause" : "play_arrow";
    const mainLabel = !store.isFocusActive ? t("start") : store.isPaused ? t("resume") : t("pause");
    return /* @__PURE__ */ window.React.createElement(
      "div",
      {
        ref: popupRef,
        className: "pointer-events-auto",
        style: {
          ...getPopupStyle(),
          boxSizing: "border-box",
          width: 320,
          padding: 20,
          borderRadius: 32,
          background: "var(--kb-bg-shell, var(--theme-bg-dark, #161922))",
          border: "1px solid var(--kb-stroke-subtle, var(--theme-border))",
          boxShadow: "var(--kb-shadow-e3, 0 12px 32px rgba(0,0,0,.45))",
          color: "var(--kb-fg-1, #fff)",
          overflow: "visible"
        }
      },
      /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 16 } }, /* @__PURE__ */ window.React.createElement("div", { style: { ...cTonal, width: 44, height: 44, borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: { ...iconStyle(24, 1), color: "var(--kb-accent, var(--theme-accent, currentColor))" } }, "hourglass_top")), /* @__PURE__ */ window.React.createElement("h3", { style: { flex: 1, minWidth: 0, margin: 0, fontSize: 19, fontWeight: 600, fontFamily: "var(--kb-font-display, inherit)", textAlign: "start", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, t("focusMode")), /* @__PURE__ */ window.React.createElement("button", { type: "button", onClick: onClose, "aria-label": t("close"), style: { ...circleBtn, width: 36, height: 36, borderRadius: 18, background: cInset, color: "var(--kb-fg-1, #fff)" } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(20) }, "close"))),
      /* @__PURE__ */ window.React.createElement("div", { style: { position: "relative", width: ringSize, height: ringSize, margin: "0 auto 20px" } }, /* @__PURE__ */ window.React.createElement("svg", { width: ringSize, height: ringSize, viewBox: `0 0 ${ringSize} ${ringSize}`, style: { transform: "rotate(-90deg)", display: "block" }, "aria-hidden": "true" }, /* @__PURE__ */ window.React.createElement("circle", { cx: ringSize / 2, cy: ringSize / 2, r: ringR, fill: "none", stroke: "var(--kb-ring-track, rgba(255,255,255,.14))", strokeWidth: ringStroke }), /* @__PURE__ */ window.React.createElement("circle", { cx: ringSize / 2, cy: ringSize / 2, r: ringR, fill: "none", stroke: "var(--kb-accent, var(--theme-accent, #7c9cff))", strokeWidth: ringStroke, strokeLinecap: "round", strokeDasharray: ringC, strokeDashoffset: ringC * (1 - progress) })), /* @__PURE__ */ window.React.createElement("div", { style: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ window.React.createElement("span", { style: { fontFamily: "var(--kb-font-display, inherit)", fontSize: 48, fontWeight: 600, fontVariantNumeric: "tabular-nums", lineHeight: 1 } }, formatClock(shownSeconds)), store.isPaused && /* @__PURE__ */ window.React.createElement("span", { style: { fontSize: 12, color: "var(--kb-fg-2, #aab)", marginTop: 6 } }, t("pause")))),
      /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 20 } }, /* @__PURE__ */ window.React.createElement("button", { type: "button", "aria-label": t("stop"), disabled: !store.isFocusActive, onClick: () => {
        focusStore.stopTimer();
        onClose();
      }, style: { ...circleBtn, ...dis(!store.isFocusActive) } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(22) }, "stop")), /* @__PURE__ */ window.React.createElement("button", { type: "button", "aria-label": mainLabel, title: mainLabel, disabled: startDisabled, onClick: mainAction, style: { width: 72, height: 72, borderRadius: 28, border: 0, background: "var(--kb-accent, var(--theme-accent, #7c9cff))", color: "var(--kb-on-accent, #fff)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", ...dis(startDisabled) } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(36, 1) }, mainIcon)), /* @__PURE__ */ window.React.createElement("button", { type: "button", "aria-label": isPlayingPreview ? t("stop") : t("ambience"), disabled: store.isFocusActive, onClick: togglePreview, style: { ...circleBtn, ...dis(store.isFocusActive) } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(22) }, isPlayingPreview ? "volume_off" : "volume_up"))),
      /* @__PURE__ */ window.React.createElement("div", { style: { background: "var(--kb-bg-surface, var(--theme-surface))", borderRadius: 24, padding: 16 } }, /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 16, minWidth: 0 } }, renderStepper(t("minutes"), localMin, 0, 120, (v) => setLocalMin(v)), renderStepper(t("seconds"), localSec, 0, 59, (v) => setLocalSec(v))), /* @__PURE__ */ window.React.createElement("div", { style: { fontSize: 12, color: "var(--kb-fg-2, #aab)", marginBottom: 8 } }, t("ambience")), /* @__PURE__ */ window.React.createElement("div", { role: "radiogroup", "aria-label": t("ambience"), style: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 } }, MELODIES.map((m) => {
        const selected = m === localMelody;
        return /* @__PURE__ */ window.React.createElement(
          "button",
          {
            key: m,
            type: "button",
            role: "radio",
            "aria-checked": selected,
            disabled: store.isFocusActive,
            onClick: () => {
              setLocalMelody(m);
              stopPreview();
            },
            style: { height: 32, padding: "0 12px", borderRadius: 10, border: 0, fontSize: 13, cursor: "pointer", background: selected ? "var(--kb-bg-container, var(--theme-accent-glow, rgba(255,255,255,.1)))" : "var(--kb-bg-tile, var(--theme-surface, #242833))", color: selected ? "var(--kb-on-container, #fff)" : "var(--kb-fg-2, #aab)", fontWeight: selected ? 600 : 400, ...dis(store.isFocusActive) }
          },
          m
        );
      })), /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" } }, /* @__PURE__ */ window.React.createElement("span", { style: { fontSize: 14, fontWeight: 500 } }, t("loop")), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          type: "button",
          role: "switch",
          "aria-checked": localLoop,
          "aria-label": t("loop"),
          onClick: () => !store.isFocusActive && setLocalLoop(!localLoop),
          disabled: store.isFocusActive,
          className: "no-drag-region",
          style: { width: 44, height: 26, borderRadius: 13, border: 0, position: "relative", cursor: "pointer", background: localLoop ? "var(--kb-accent, var(--theme-accent, #7c9cff))" : "var(--kb-bg-inset, rgba(255,255,255,.18))", ...dis(store.isFocusActive) }
        },
        /* @__PURE__ */ window.React.createElement("span", { style: { position: "absolute", top: 3, left: localLoop ? 21 : 3, width: 20, height: 20, borderRadius: 10, background: localLoop ? "var(--kb-on-accent, #fff)" : "var(--kb-fg-2, #ccd)", transition: "left 120ms" } })
      )))
    );
  };
  window.KoBarExtensions.registerPanel("focus-mode-plugin-panel", {
    id: "focus-mode-plugin-panel",
    render: (props) => React.createElement(FocusPopupWidget, props)
  });
  focusStore.subscribe(() => {
    const state = focusStore.getState();
    const appState = useAppStore.getState();
    if (state.isFocusPopupOpen && appState.activeExtensionPanelId !== "focus-mode-plugin-panel") {
      appState.closeAllUtilityPopups?.();
      useAppStore.setState({
        activeExtensionPanelId: "focus-mode-plugin-panel",
        activeExtensionAnchorRect: state.focusAnchorRect
      });
    } else if (!state.isFocusPopupOpen && appState.activeExtensionPanelId === "focus-mode-plugin-panel") {
      useAppStore.setState({
        activeExtensionPanelId: null
      });
    }
  });
  useAppStore.subscribe((state, prevState) => {
    if (prevState.activeExtensionPanelId === "focus-mode-plugin-panel" && state.activeExtensionPanelId !== "focus-mode-plugin-panel") {
      if (focusStore.getState().isFocusPopupOpen) {
        focusStore.setState({ isFocusPopupOpen: false });
      }
    }
  });
})();
