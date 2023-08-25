import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {motion, AnimatePresence} from 'framer-motion';
import './styles.css';

function Interview(question, answer) {
  const [isShowText, setShowText] = useState(false);

  const handleQuestionClick = () => {
    setShowText(!isShowText);
  };

  return (
    <div>
        <div className='question_block' onClick={handleQuestionClick}>
        <CSSTransition 
        in={isShowText} 
        classNames='plus_minus'
        timeout={400}>
            {!isShowText ? <plus></plus> : <minus></minus>}
        </CSSTransition>
        
        <question_text>{question}</question_text>  
        </div>
        <AnimatePresence>
            {
                isShowText && (
                <motion.div
                initial={{height: 0}}
                animate={{height: 'auto'}}
                exit={{height: 0}}
                style={{overflow: 'hidden'}}
                transition={{duration: .4}}
                >
                    <div className='drop_text'>{answer}</div>
                </motion.div>
                )
            }
        </AnimatePresence>
    </div>
    
        
  );
}

export default Interview;