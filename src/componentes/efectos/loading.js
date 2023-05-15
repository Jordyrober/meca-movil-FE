import React from "react";
import '../../css/style.css'

function Loading() {
  return (
    <div>
      <div class="text-center loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
