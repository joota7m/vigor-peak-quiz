import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

new_css = """        /* COMMENTS SECTION */
        .comments-header {
            font-size: 16px;
            font-weight: 700;
            color: #050505;
            margin: 28px 0 16px;
        }

        .comments-section {
            background: #fff;
            border: 1px solid #ced0d4;
            border-radius: 8px;
            padding: 16px 20px;
            margin-bottom: 24px;
        }

        /* FACEBOOK STYLE COMMENTS */
        .comment {
            display: flex;
            gap: 10px;
            margin-bottom: 16px;
        }

        .comment:last-of-type {
            margin-bottom: 0;
        }

        .comment.reply {
            margin-left: 44px; /* Offset for avatar */
        }

        .comment-avatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            background-color: #e4e6eb;
        }

        .comment-avatar.av1 { background: url('https://randomuser.me/api/portraits/men/32.jpg') center/cover; }
        .comment-avatar.av2 { background: url('https://randomuser.me/api/portraits/men/45.jpg') center/cover; }
        .comment-avatar.av3 { background: url('https://randomuser.me/api/portraits/men/22.jpg') center/cover; }
        .comment-avatar.av4 { background: url('https://randomuser.me/api/portraits/men/28.jpg') center/cover; }
        .comment-avatar.av5 { background: url('https://randomuser.me/api/portraits/men/50.jpg') center/cover; }
        .comment-avatar.av6 { background: url('https://randomuser.me/api/portraits/women/44.jpg') center/cover; }
        .comment-avatar.av7 { background: url('https://randomuser.me/api/portraits/men/60.jpg') center/cover; }
        .comment-avatar.av8 { background: url('https://randomuser.me/api/portraits/men/33.jpg') center/cover; }

        .comment-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex: 1;
        }

        .comment-bubble-wrapper {
            position: relative;
            display: inline-block;
            max-width: 100%;
        }

        .comment-bubble {
            background: #f0f2f5;
            border-radius: 18px;
            padding: 9px 12px;
            display: inline-block;
        }

        .comment-author {
            font-weight: 600;
            font-size: 13px;
            color: #385898;
            margin-bottom: 2px;
            cursor: pointer;
        }

        .comment-author:hover {
            text-decoration: underline;
        }

        .comment-text {
            font-size: 15px;
            color: #050505;
            line-height: 1.3333;
            word-wrap: break-word;
        }

        .comment-reactions {
            position: absolute;
            bottom: -9px;
            right: 0px; 
            background: #fff;
            padding: 2px 4px 2px 2px;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.15);
            color: #65676b;
            font-size: 13px;
            display: flex;
            align-items: center;
            line-height: 1;
            z-index: 2;
        }

        .comment-footer {
            display: flex;
            gap: 12px;
            font-size: 12px;
            color: #65676b;
            font-weight: 600;
            padding-left: 12px;
            margin-top: 4px;
            align-items: center;
        }

        .comment-footer-item {
            cursor: pointer;
            transition: color 0.1s;
        }

        .comment-footer-item:hover {
            color: #050505;
            text-decoration: underline;
        }

"""

start_str = "        /* COMMENTS SECTION */"
end_str = "        /* NO MORE COMMENTS */"

start_idx = text.find(start_str)
end_idx = text.find(end_str)

if start_idx != -1 and end_idx != -1:
    new_text = text[:start_idx] + new_css + text[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print("Replaced CSS successfully.")
else:
    print("CSS markers not found.")
