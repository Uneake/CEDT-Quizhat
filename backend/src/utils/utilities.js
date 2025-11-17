export const parseLLMJSON = (llmOutput) => {
  try {
    const cleaned = llmOutput.replace(/```json|```/g, "").trim();
    const data = JSON.parse(cleaned);

    
    if (data.quizzes && Array.isArray(data.quizzes)) {
      data.quizzes = data.quizzes.map(q => ({
        ...q,
        options: q.options || []  
      }));
    }

    return data;
  } catch (err) {
    console.error("Failed to parse LLM JSON:", err, llmOutput);
    return null;
  }
};

export const cutUntilJson = (str)=> {
  const marker = "```json"; 
  const startIndex = str.indexOf(marker); 

  if (startIndex !== -1) {
    
    return str.substring(startIndex);
  } else {
    
    return '';
   
  }
}

export const cutAfterLastTripleQuote = (str) => {
  const marker = "```";
  
  const lastIndex = str.lastIndexOf(marker);

  if (lastIndex !== -1) {
   
    return str.substring(0, lastIndex + marker.length);
  } else {
    
    return str;
  
  }
}
