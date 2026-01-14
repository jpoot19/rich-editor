import type React from "react";
import type { MenuBarProps } from "../types";
import styles from "../styles.module.css"
 

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
    if (!editor) return null;

    const getButtonClass = (isActive: boolean) => {
        isActive ? `${styles.menuButton} ${styles.isActive}` : styles.menuButton
    }

    return (
        <div className={styles.menuBar}>
            <button
            
            >
                Bold
            </button>
        </div>
    )
}


export default MenuBar;