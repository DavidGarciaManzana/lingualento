import React from 'react';
import axios from "axios";
import {useRouter} from "next/router";

const TEXTENDPOINT = 'https://api.openai.com/v1/chat/completions';

function UseChatGPTAPI({textToFormat,rangeText,tone,format}) {
    const {locale} = useRouter();
    let promting;
    if(locale==='en'){
        promting= `${process.env.NEXT_PUBLIC_ENGLISHTEXTPROMPT} ${textToFormat}, ${tone}, ${format}, and  ${rangeText}.`
    } else if (locale === 'es'){
        promting= `${process.env.NEXT_PUBLIC_SPANISHTEXTPROMPT} ${textToFormat}, ${tone}, ${format}, y ${rangeText}.`
    }

console.log(promting)
    async function handleTextAPI() {

        try {
            const response = await axios.post(
                TEXTENDPOINT,
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'user',
                            content: promting,
                        },
                    ],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_APIKEY}`,
                    },
                }
            );

            if (response.data.choices[0].message.content || response.data.choices[0].message.content !== '') {

                return response.data.choices[0].message.content;
            } else {

                console.error(response.status); //401
                console.error('HA OCURRIDO UN ERROR');
                // throw error('Error getting data');
            }
        } catch (error) {
            console.error('HA OCURRIDO UN ERROR2');
            throw error;
        }
    }


    return {handleTextAPI};

}

export default UseChatGPTAPI;