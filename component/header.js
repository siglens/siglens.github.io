(function ($) {
  $.fn.header = function () {
    // Iterate over each selected element
    return this.each(function () {
      const $header = $(this);

      const headerHtml = `
                <nav class="navbar navbar-expand-lg fixed-top py-2 px-4 px-md-0">
        <div class="container">
            <a class="navbar-brand " href="index.html">
                <div class="d-flex">
                    <div class="pr-1"><img src="./assets/ss-logo.svg" alt=""></div>
                    <div class="font-weight-bold text-white h2 pl-1">SigLens</div>
                </div>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://siglens.github.io/siglens-docs/"
                            target="_blank">Documentation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/blog/allblogs.html">Blogs</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="about-us.html" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Community </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="https://github.com/siglens/siglens">GitHub</a>
                            <a class="dropdown-item" href="/slack.html">Slack</a>
                            <a class="dropdown-item" href="/guides.html">Guides</a>
                            <a class="dropdown-item" href="/questions.html">Questions</a>
                        </div>
                    </li>
                    <li>
                        <a href="#getting-started" id="try-now-btn">Try Now</a>
                    </li>
                    <li>
                        <a href="https://github.com/siglens/siglens" target="_blank">
                            <img src="assets/github.svg" width="26" height="26" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
            `;

      // Append the generated HTML to the existing content
      $header.append(headerHtml);
    });
  };
})(jQuery);
