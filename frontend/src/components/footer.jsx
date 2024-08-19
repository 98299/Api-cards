import React from 'react';

function Footer() {
    return (
        <div className='container border-top bg-light mt-5'  >
            <div className='row mt-5'>
                <div className='col'>
                    <h3>Abstract</h3>
                    <p>Branches</p>
                </div>
                <div className='col'>
                <p>Resources</p>
                    <a href='#'>Blog</a><br />
                    <a href='#'>Help Center</a><br />
                    <a href='#'>Release Notes</a><br />
                    <a href='#'>Status</a>

                </div>
                <div className='col'>
                    <p>Community</p>
                    <a href='#'>Twitter</a><br />
                    <a href='#'>LinkedIn</a><br />
                    <a href='#'>Facebook</a><br />
                    <a href='#'>Dribble</a><br />
                    <a href='#'>Podcast</a><br />

                </div>
                <div className='col'>
                <p>Company</p>
                    <a href='#'>About</a><br />
                    <a href='#'>Careers</a><br />
                    <a href='#'>Legal</a><br />
                    <p><b>Contact us <br></br>info@Abstract.com</b></p>
                </div>
                <div className='col'>
                    <i class="fa-solid fa-compass"></i>
                    <p> &copy; Copyright 2022 <br />
                        Abstract studio Design , inc. <br />
                        All rights reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
