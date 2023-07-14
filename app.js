
//Night/Dark mode
function toggleModal() {
    var body = document.querySelector('body');
    body.classList.toggle('dark');

    var sunIcon = document.querySelector('.sun-icon');
    var moonIcon = document.querySelector('.moon-icon');

    sunIcon.style.display = document.body.classList.contains('dark') ? 'block' : 'none';
    moonIcon.style.display = document.body.classList.contains('dark') ? 'none' : 'block';
}

/**========================================================================================= */

/**
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD ronote
 * 5. Next / Previous
 * 6. Random
 * 7. Next / Repeat when ended
 * 8. Acitve song
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const bacBtn = $('.btn-play')

const player = $('.player')
const heading = $('.footer-title');
const singer = $('.footer-author');
const cdThumb = $('.footer-thumb img');
const audio = $('#audio');
const cd = $('.footer-thumb');
const playBtn = $('.btn-toggle-play')
const progress = $('#progress');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const listsongs = $('.listsongs')
const timeStart = $('#timeFirst')
const timeEnd = $('#timeLast')
const btnVolum = $('.fa-volum')
const volumProgress = $('.volum-progress')


const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isVolume: false,
    songs: [
        {
            id: 1,
            name: 'Hoa cỏ lau',
            singer: 'Phong Max',
            path: './assets/music/song1.mp3',
            image: './assets/image/image1.jpg',
            
        },
        {
            id: 2,
            name: 'Hai mươi hai',
            singer: 'amee x hứa kim tuyền',
            path: './assets/music/song2.mp3',
            image: './assets/image/image2.jpg',
            
        },
        {
            id: 3,
            name: '100 Years Love',
            singer: 'NamDuc',
            path: './assets/music/song3.mp3',
            image: './assets/image/image3.jpg', 
        },
        {
            id: 4,
            name: 'GIÓ',
            singer: 'Jank',
            path: './assets/music/song4.mp3',
            image: './assets/image/image4.jpg', 
        },
        {
            id: 5,
            name: '4 MÙA THƯƠNG EM',
            singer: 'Lập Nguyên ft. NIGHT T x Yến Nồi Cơm Điện',
            path: './assets/music/song5.mp3',
            image: './assets/image/image5.jpg', 
        },
        {
            id: 6,
            name: 'Như Anh Đã Thấy Em',
            singer: 'PhucXp ft. Freak D',
            path: './assets/music/song6.mp3',
            image: './assets/image/image6.jpg', 
        },
        {
            id: 7,
            name: 'Hẹn Em Ở Lần Yêu Thứ 2',
            singer: 'Nguyenn x Đặng Tuấn Vũ',
            path: './assets/music/song7.mp3',
            image: './assets/image/image7.jpg', 
        },
        {
            id: 8,
            name: 'Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau',
            singer: 'JUUN D x O.LEW',
            path: './assets/music/song8.mp3',
            image: './assets/image/image8.jpg', 
        },
        {
            id: 9,
            name: 'Lấy Chồng Sớm Làm Gì',
            singer: 'HuyR ft. Tuấn Cry',
            path: './assets/music/song9.mp3',
            image: './assets/image/image9.jpg', 
        },
        {
            id: 10,
            name: 'Sao Em Nỡ Vội Lấy Chồng',
            singer: 'Thành Nghiệp',
            path: './assets/music/song10.mp3',
            image: './assets/image/image10.jpg', 
        },
        {
            id: 11,
            name: 'Về Quê',
            singer: 'Mikelodic',
            path: './assets/music/song11.mp3',
            image: './assets/image/image11.jpg', 
        },
        {
            id: 12,
            name: 'Trách Phận Vô Danh',
            singer: '(RIN Music Remix) - Linh Hương Luz',
            path: './assets/music/song12.mp3',
            image: './assets/image/image12.jpg', 
        },
        {
            id: 13,
            name: '是你 (Là Anh) LoFi Ver.',
            singer: '夢然 (Mộng Nhiên)',
            path: './assets/music/song13.mp3',
            image: './assets/image/image13.jpg', 
        },
        {
            id: 14,
            name: 'Cô Gái Này Là Của Ai Remix',
            singer: 'Krix x Rush x Nhi Nhi',
            path: './assets/music/song14.mp3',
            image: './assets/image/image14.jpg', 
        },
        {
            id: 15,
            name: 'Kẻ Theo Đuổi Ánh Sáng (Lofi Ver.)',
            singer: 'Huy Vạc x Tiến Nguyễn x Freak D',
            path: './assets/music/song15.mp3',
            image: './assets/image/image15.jpg', 
        },
        {
            id: 16,
            name: '左手指月 ',
            singer: '薩頂頂',
            path: './assets/music/song16.mp3',
            image: './assets/image/image16.jpg', 
        },
        {
            id: 17,
            name: '错位时空 ',
            singer: '艾辰',
            path: './assets/music/song17.mp3',
            image: './assets/image/image17.jpg', 
        },
        {
            id: 18,
            name: '沦陷',
            singer: '王靖雯不胖',
            path: './assets/music/song18.mp3',
            image: './assets/image/image18.jpg', 
        },
        {
            id: 19,
            name: '大天篷',
            singer: '李袁杰',
            path: './assets/music/song19.mp3',
            image: './assets/image/image19.jpg', 
        },
        {
            id: 20,
            name: '关山酒',
            singer: '等什么君',
            path: './assets/music/song20.mp3',
            image: './assets/image/image20.jpg', 
        },
        {
            id: 21,
            name: '海底(Remix)',
            singer: '一支榴莲',
            path: './assets/music/song21.mp3',
            image: './assets/image/image21.jpg', 
        },
        {
            id: 22,
            name: 'tình ca tình ta',
            singer: 'KIS',
            path: './assets/music/song22.mp3',
            image: './assets/image/image22.jpg', 
        },
        {
            id: 23,
            name: 'Nụ Cười Em Là Nắng (Lofi Ver.)',
            singer: 'Green x Freak D',
            path: './assets/music/song23.mp3',
            image: './assets/image/image23.jpg', 
        },
        {
            id: 24,
            name: 'Lạc Vào Trong Mơ',
            singer: 'Simon C X Wuy',
            path: './assets/music/song24.mp3',
            image: './assets/image/image24.jpg', 
        },
        {
            id: 25,
            name: 'Yêu Lại Từ Đầu',
            singer: 'An Vũ x Freak D',
            path: './assets/music/song25.mp3',
            image: './assets/image/image25.jpg', 
        },
        {
            id: 26,
            name: 'Một Ngày Chẳng Nắng',
            singer: 'Pháo Northside x Thỏ Bảy Màu',
            path: './assets/music/song26.mp3',
            image: './assets/image/image26.jpg', 
        },
        {
            id: 27,
            name: 'Hành Lang Cũ (Hạ Nhớ)',
            singer: 'Long Nón Lá x Masew',
            path: './assets/music/song27.mp3',
            image: './assets/image/image27.jpg', 
        },
        {
            id: 28,
            name: 'KÉM DUYÊN',
            singer: 'RUM X NIT X MASEW',
            path: './assets/music/song28.mp3',
            image: './assets/image/image28.jpg', 
        },
        {
            id: 29,
            name: 'Người Em Cố Đô(Remix)',
            singer: 'Rum x Đaa',
            path: './assets/music/song29.mp3',
            image: './assets/image/image29.jpg', 
        },
        {
            id: 30,
            name: '很任性 (DJ版)',
            singer: '玄子',
            path: './assets/music/song30.mp3',
            image: './assets/image/image30.jpg', 
        },
        {
            id: 31,
            name: 'Unstoppable',
            singer: 'Sia',
            path: './assets/music/song31.mp3',
            image: './assets/image/image31.jpg', 
        },
        {
            id: 32,
            name: 'La la la',
            singer: 'Naughty Boy ft. Sam Smith',
            path: './assets/music/song32.mp3',
            image: './assets/image/image32.jpg', 
        },
        {
            id: 33,
            name: 'abcdefu',
            singer: 'GAYLE',
            path: './assets/music/song33.mp3',
            image: './assets/image/image33.jpg', 
        },
        {
            id: 34,
            name: '时间的过客',
            singer: '名决',
            path: './assets/music/song34.mp3',
            image: './assets/image/image34.jpg', 
        },
        {
            id: 35,
            name: '虞兮叹',
            singer: '闻人听書',
            path: './assets/music/song35.mp3',
            image: './assets/image/image35.jpg', 
        },
        {
            id: 36,
            name: 'The Hills x Where Have You Been',
            singer: 'Thereon Remix',
            path: './assets/music/song36.mp3',
            image: './assets/image/image36.jpg', 
        },
        {
            id: 37,
            name: 'Mi Mi Mi X Bboom Bboom',
            singer: 'Japan REMIX ',
            path: './assets/music/song37.mp3',
            image: './assets/image/image37.jpg', 
        },
        {
            id: 38,
            name: 'Heroes Tonight FT. Fly Away',
            singer: 'Trí Thức REMIX',
            path: './assets/music/song38.mp3',
            image: './assets/image/image38.jpg', 
        },
    ],

    getTimeMusic: function() {
        this.songs.forEach(function(song) {
          var music = new Audio(song.path);
          music.addEventListener('loadedmetadata', function() {
            song.duration = music.duration;
            var timeMusic = document.getElementById("time-music-" + song.id);
            timeMusic.innerHTML = app.formatTime(song.duration);
          });
        });
      },
    
    // Phương thức formatTime()
    formatTime: function(seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = Math.floor(seconds % 60);
        var formattedTime = (minutes < 10 ? '0' : '') + minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
        return formattedTime;
    },

    //Render ra danh sách bài hát
    render: function() {
        const htmls = this.songs.map((song, index) => {
          return `
            <div class="song ${index === this.currentIndex ? 'active-song' : ''}" data-index="${index}">
              <div class="thumb">
                <img src="${song.image}" alt="">
              </div>
              <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
              </div>
              <div class="time-song" id="time-music-${song.id}">${app.formatTime(song.duration)}</div>
            </div>
          `;
        });
        listsongs.innerHTML = htmls.join('');
    },
    

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    //Xử lí các sự kiện
    handleEvents: function() {
        const _this = this;
        //Xử lí khi click play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play() 
            }
        }
        bacBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play() 
            }
        }
        //Khi bài hát được play
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing')
        }
        //Khi bài hát được pause
        audio.onpause = function() {
            _this.isPlaying = false;
            player.classList.remove('playing')
        }

        //Khi tiến độ bài hát thay đổi 
        audio.ontimeupdate = function() {
            if(audio.duration) {
                //audio.duration: tổng thời gian bài hát tính bằng giây
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
                _this.convertSecon(audio.currentTime, audio.duration)
            }
        }

        //Xử lí khi tua bài hát
        progress.oninput = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
        }
        //Khi next bài hát
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
            _this.nextSong()
            }            
            audio.play()
            _this.render()
        }

        //Khi prev bài hát
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong()
            } 
            audio.play()
            _this.render()
        }

        //Khi random bài hát
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }

        //Xử lí phát lại 1 bài hát 
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }
        
        //Xử lí next song khi audio ended
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
            
        }

        //Lắng nghe hành vi click vào list songs
        listsongs.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active-song')
            //Xử lí khi click vào song
            if(songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.render()
                audio.play()
            }
        }

        // tăng giảm âm lượng
        volumProgress.onchange = function(e) {
            const audioVol =  e.target.value
            audio.volume = audioVol / 100
           

          }
          // bật tắt volum 
          btnVolum.onclick = function() {
              // app.isVolum = !app.isVolum
              // this.classList.toggle('fa-volume-xmark', app.isVolum)
              if (app.isVolume) {
                  this.classList.remove('fa-volume-xmark')
                  app.isVolume = false
                  audio.volume = 1;
            } else {
                  this.classList.add('fa-volume-xmark')
                  app.isVolume = true
                  audio.volume = 0;
                  audioVol = 0;
            }
          }
    },

    //Xử lí time start / time end
    convertSecon: function(curren, duration){
        let miliDuration = Math.floor(duration / 60);
        var seconDuration = ((duration % 60)).toFixed(0);
        seconDuration = seconDuration < 10 ? '0' + seconDuration :  seconDuration;


        let miliCurren = Math.floor(curren / 60);
        var seconCurren = ((curren % 60)).toFixed(0);
        seconCurren = seconCurren < 10 ? '0' + seconCurren : seconCurren;


        timeEnd.innerText = `${miliDuration}:${seconDuration}`;
        timeStart.innerText = `${miliCurren}:${seconCurren}`;
    },

    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        singer.textContent = this.currentSong.singer
        cdThumb.src = this.currentSong.image
        audio.src = this.currentSong.path
    },
    nextSong: function() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex === this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    start: function() {
        this.getTimeMusic();
        //Render ra danh sách bài hát
        this.render();

        //Định nghĩa các thuộc tính cho object
        this.defineProperties();

        //Lắng nghe / Xử lí các sự kiện (DOM events)
        this.handleEvents();
        
        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        
        
    }
}

app.start()





