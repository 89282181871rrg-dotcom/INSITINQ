"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";

/** Выбор запоминается в браузере, плашка больше не показывается. */
const COOKIE_NOTICE_KEY = "insaitiq-cookie-notice";

/**
 * Уведомление о cookie. Сайт использует только необходимые cookie
 * (Политика конфиденциальности, раздел 8), поэтому достаточно уведомления
 * с кнопкой «Понятно» — без выбора категорий.
 */
export function CookieNotice() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(COOKIE_NOTICE_KEY)) setVisible(true);
    } catch {
      // приватный режим без storage — просто показываем уведомление
      setVisible(true);
    }
  }, []);

  const accept = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(COOKIE_NOTICE_KEY, "accepted");
    } catch {
      /* не запомнится — покажется снова при следующем визите */
    }
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="region"
          aria-label={t("cookies.label")}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto flex max-w-xl flex-col gap-3 rounded-2xl border border-border bg-menu p-4 text-sm text-foreground shadow-soft sm:inset-x-6 sm:bottom-6 sm:flex-row sm:items-center sm:gap-5 sm:p-5"
        >
          <p className="leading-5 text-foreground/90">
            {t("cookies.text")}{" "}
            <Link
              href="/legal/privacy"
              className="underline underline-offset-2 transition-colors hover:text-primary"
            >
              {t("cookies.link")}
            </Link>
            .
          </p>
          <button
            type="button"
            onClick={accept}
            className="h-10 shrink-0 self-end rounded-pill bg-primary px-5 font-pixel text-xs uppercase tracking-wider text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:self-auto"
          >
            {t("cookies.accept")}
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
