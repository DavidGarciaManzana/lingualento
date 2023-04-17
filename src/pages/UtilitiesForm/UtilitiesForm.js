import React from "react";
import styles from '@/pages/UtilitiesForm/UtilitiesForm.module.css'
import useChatGPTAPI from "@/hooks/useChatGPTAPI";
import {LanguageContext} from "@/LanguageProvider/LanguageProvider";
import button from "@/pages/Button/Button";

function UtilitiesForm({textToFormat, handleData, handleError, handleLoading, setText, beforeModal}) {
    const {t} = React.useContext(LanguageContext);
    const [range, setRange] = React.useState(0);
    const [rangeText, setRangeText] = React.useState(t?.utilitiesFormSizeSmall);
    const [tone, setTone] = React.useState(t?.professional);
    const [format, setFormat] = React.useState(t?.email);
    React.useEffect(() => {
        console.log(rangeText)
        console.log('tipo del mensaje', typeof (textToFormat))
    }, [rangeText])
    const handleRangeChange = (event) => {
        setRange(event.target.valueAsNumber);
        if (event.target.valueAsNumber === 0) {
            setRangeText(t?.utilitiesFormSizeSmall)
        } else if (event.target.valueAsNumber === 1) {
            setRangeText(t?.utilitiesFormSizeMedium)
        } else if (event.target.valueAsNumber === 2) {
            setRangeText(t?.utilitiesFormSizeLarge)
        }
    };
    const {handleTextAPI} = useChatGPTAPI({textToFormat, rangeText, tone, format});
    return (
        <>
            <form className={styles.utilitiesForm} onSubmit={(event) => {
                event.preventDefault();
                handleLoading(true)
                beforeModal(false)

                async function someFunction() {
                    try {
                        const data = await handleTextAPI();
                        handleLoading(false)
                        handleData(data)
                    } catch (error) {
                        handleLoading(false)
                        handleError(error)
                        console.log('ENTIENDE QUE AQUI HAY UN ERROOOOOOR')
                    }
                }

                someFunction()
                setText('')
                setRange(0)
                setTone('')
                setFormat('')
            }}>
                <label htmlFor="tone-select">
                    {t?.utilitiesFormToneLabel}
                </label>
                <select className={styles.tone} name="Tone" id="tone-select" value={tone} onChange={event => {
                    setTone(event.target.value)
                }}>
                    <option value={t?.professional}>{t?.professional}</option>
                    <option value={t?.informal}>{t?.informal}</option>
                    <option value={t?.enthusiast}>{t?.enthusiast}</option>
                    <option value={t?.informative}>{t?.informative}</option>
                    <option value={t?.funny}>{t?.funny}</option>
                    <option value={t?.urgent}>{t?.urgent}</option>
                </select>

                <label htmlFor="format-select">
                    {t?.utilitiesFormFormatLabel}
                </label>
                <select className={styles.format} name="Format" id="format-select" value={format}
                        onChange={event => {
                            setFormat(event.target.value)
                        }}>
                    <option value={t?.email}>{t?.email}</option>
                    <option value={t?.tweet}>{t?.tweet}</option>
                    <option value={t?.socialMediaPost}>{t?.socialMediaPost}</option>
                    <option value={t?.instantMessage}>{t?.instantMessage}</option>
                    <option value={t?.blog}>{t?.blog}</option>
                </select>

                <label htmlFor="size-slider">
                    {t?.utilitiesFormSizeLabel}
                </label>
                <input className={styles.format} id='size-slider' name="formatSize" type="range" step="0" min="0"
                       max="2" value={range}
                       onChange={handleRangeChange}/>
                <output name="range0value" htmlFor="formatSize">
                    {range === 0 ? t?.utilitiesFormSizeSmall : null}
                </output>
                <output name="range1value" htmlFor="formatSize">
                    {range === 1 ? t?.utilitiesFormSizeMedium : null}
                </output>
                <output name="range2value" htmlFor="formatSize">
                    {range === 2 ? t?.utilitiesFormSizeLarge : null}
                </output>
                <button type={"submit"}>{t?.submitButton}</button>
            </form>

        </>
    )
}

export default UtilitiesForm