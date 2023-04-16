import React from "react";
import styles from '@/pages/UtilitiesForm/UtilitiesForm.module.css'

function UtilitiesForm ({setText,beforeModal,nextModal}){
    const [range, setRange] = React.useState(0);
    const [tone, setTone] = React.useState('');
    const [format, setFormat] = React.useState('');
    const handleRangeChange = (event) => {
        setRange(event.target.valueAsNumber);
    };
    return (
        <form className={styles.utilitiesForm} onSubmit={() => {
            beforeModal(false)
            //todo call the api with the data textToFormat,tone,format and range
            setText('')
            setRange('')
            setTone('')
            setFormat('')
        }}>
            <label htmlFor="tone-select">
                Tone:
            </label>
            <select className={styles.tone} name="Tone" id="tone-select" value={tone} onChange={event => {
                setTone(event.target.value)
            }}>
                <option value="professional">Professional</option>
                <option value="informal">Informal</option>
                <option value="enthusiast">Enthusiast</option>
                <option value="informative">Informative</option>
                <option value="funny">Funny</option>
                <option value="urgent">Urgent</option>
            </select>

            <label htmlFor="format-select">
                Format:
            </label>
            <select className={styles.format} name="Format" id="format-select" value={format}
                    onChange={event => {
                        setFormat(event.target.value)
                    }}>
                <option value="email">Email</option>
                <option value="tweet">Tweet</option>
                <option value="post">Post</option>
                <option value="sms">SMS/WA</option>
                <option value="blog">Blog</option>
            </select>

            <label htmlFor="size-slider">
                Size:
            </label>
            <input className={styles.format} id='size-slider' name="formatSize" type="range" step="0" min="0"
                   max="2" value={range}
                   onChange={handleRangeChange}/>
            <output name="range0value" htmlFor="formatSize">
                {range === 0 ? 'Small' : null}
            </output>
            <output name="range1value" htmlFor="formatSize">
                {range === 1 ? 'Medium' : null}
            </output>
            <output name="range2value" htmlFor="formatSize">
                {range === 2 ? 'Large' : null}
            </output>
            <button type={"submit"}>Submit</button>
        </form>
    )
}

export default UtilitiesForm