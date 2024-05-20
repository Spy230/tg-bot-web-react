const tg = window.Telegram.WebApp;

export function useTelegram() {
    const onClose = () => {
        tg.close();
    };

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide(); // Скрываем кнопку, если она видна
        } else {
            tg.MainButton.show(); // Показываем кнопку, если она скрыта
        }
    };

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        query: tg.initDataUnsafe?.query_id,
    };
}
